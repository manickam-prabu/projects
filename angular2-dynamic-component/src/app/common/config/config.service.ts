import { Injectable } from '@angular/core';
import { AppConfigs } from './app.config';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ConfigService {

  private _appConfig: AppConfigs;
  protected incoming: Observable<AppConfigs>;



  constructor(protected _http: Http) {

  }

  loadConfig(appConfig: AppConfigs): AppConfigs {
    console.log('ConfigService :: loadConfig: ');

    this._appConfig = appConfig;



    this.incoming = this._http.get('./assets/config.properties').map((res: Response) => {
      console.log('processing config file' + res);
      this._appConfig.parseConfigFile(res.text());

      return this._appConfig;

    }).catch(this.handleError);


    this.incoming.subscribe(data => {
      console.log('processing config file' + data);
    }, err => {
      console.log('processing config file error' + err);
    });
    return this._appConfig;
  }

  private handleError(error: Response) {
    console.log('in service error: ', error);
    return Observable.throw(error.json() || 'config file not found !!!');
  }



}


