import { IKeyedCollection, KeyedCollection } from '../../../common/interfaces/keyedCollection.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardMockService {

    GetDashboardConfig(UserId: string, dashboardType: string): Observable<IKeyedCollection<string>> {
        let userData: IKeyedCollection<string> = new KeyedCollection<string>();
        userData.Add('FileuploadComponent', 'FileuploadComponent');
        return Observable.of(new KeyedCollection<string>())
            .map(() => {
                console.log('using mock dashboard service::', userData);
                return userData;
            });
    };

}
