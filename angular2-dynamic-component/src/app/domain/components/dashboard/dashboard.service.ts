import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { IKeyedCollection, KeyedCollection } from '../../../common/interfaces/keyedCollection.interface';

@Injectable()
export class DashboardService {

    private _userDataUrl = '../../assets/mockData/userDb.json';
    private _userConfig = new KeyedCollection<string>();

    constructor(private _http: Http) { }

    GetDashboardConfig(UserId: string, dashboardType: string): Observable<IKeyedCollection<string>> {

        return this._http.get(this._userDataUrl)
            .map((response: Response) => {
                let userData = response.json().find(u => u.email === UserId);
                userData['dashboard'].forEach(x => {
                    this._userConfig.Add(x, x);
                });
                return this._userConfig;
            })
            .catch(this.handleError);
    };

    private handleError(error: any) {
        console.log('error:', error.message);
        let errMsg = error.message;
        return Observable.throw(errMsg);
    }

}
