import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { IKeyedCollection } from '../../../common/interfaces/keyedCollection.interface';
import { IDashboardService } from '../../../common/interfaces/dashboard.interface';
import { DashboardService } from './dashboard.service';
import { DashboardMockService } from './dashboard.mock.service';
import * as CUI from '../../domain.barrel';

const compMap = {
  'ComponentAComponent': CUI.ComponentAComponent,
  'ComponentBComponent': CUI.ComponentBComponent,
  'ComponentCComponent': CUI.ComponentCComponent,
  'ComponentDComponent': CUI.ComponentDComponent,
  'ComponentEComponent': CUI.ComponentEComponent,
  'ComponentFComponent': CUI.ComponentFComponent,
  'FileuploadComponent': CUI.FileuploadComponent
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  entryComponents: [
    CUI.ComponentAComponent,
    CUI.ComponentBComponent,
    CUI.ComponentCComponent,
    CUI.ComponentDComponent,
    CUI.ComponentEComponent,
    CUI.ComponentFComponent,
    CUI.FileuploadComponent
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  private userid: string = 'u3@qa.com';
  private uiConfig: IKeyedCollection<string>;
  private errorMsg: string = '';
  private sub: Subscription;

  constructor(private cfr: ComponentFactoryResolver,
    private parent: ViewContainerRef,
    private dashboardService: DashboardService,
    private mockedDashboard: DashboardMockService) { }

  ngOnInit(): void {

    this.sub = this.dashboardService.GetDashboardConfig(this.userid, 'BU123')
      .subscribe((data) => {
        console.log(data);
        this.uiConfig = <IKeyedCollection<string>>data;
        this.uiConfig.Keys().forEach((x) => {
          try {
            const factory = this.cfr.resolveComponentFactory(compMap[x]);
            const ref = this.parent.createComponent(factory);
            ref.changeDetectorRef.detectChanges();

          } catch (error) {
            this.errorMsg = error.hasOwnProperty('message') ? error.message : error;
            console.log('Error Message :: ', this.errorMsg);
          }
        });
      }, err => this.errorMsg = err);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
