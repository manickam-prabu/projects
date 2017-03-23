import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './domain/components/dashboard/dashboard.component';
import { DashboardService } from './domain/components/dashboard/dashboard.service';
import { DashboardMockService } from './domain/components/dashboard/dashboard.mock.service';
import { AsideComponent } from './domain/components/aside/aside.component';
import { HeaderComponent } from './domain/components/header/header.component';
import { DomainModule } from './domain/domain.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AsideComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DomainModule
  ],
  providers: [ DashboardService, DashboardMockService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
