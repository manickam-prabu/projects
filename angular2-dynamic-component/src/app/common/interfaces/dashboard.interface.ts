import { Observable } from 'rxjs';
import { IKeyedCollection } from './keyedCollection.interface';

export interface IDashboardService<T> {
    GetDashboardConfig(UserId: string, dashboardType: string): Observable<IKeyedCollection<T>>;

    /*
    Questions:
    1. IFS would have a dash board depending upon who is logged in, and which components he/she needs reterieve configuration from DB.
    this would implement one shall page for the whole application.

    2. should we create just one dash board for all the projects, or do we need one dashboard per project. 
    this would implement one shall page per project.

    */
}
