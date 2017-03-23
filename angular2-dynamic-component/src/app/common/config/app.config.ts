
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';



@Injectable()
export class AppConfigs {

  private dictionary: any;
  // private runOnce: boolean = false;

  constructor() {
    this.dictionary = new Object();
  }


  /*
    Takes the text stream from the response body of the config file and parses it into key value pairs
   */

  public parseConfigFile(textStream: string) {

    const inputLines: String[] = textStream.split('\n');
    for (let aLine of inputLines) {
      // aLine = aLine.replace(/\s+ /g,'');
      aLine = aLine.replace(/ /g, '');
      if (aLine !== '') {
        const elements: string[] = aLine.split('=');
        this.setKey(elements[0].toString(), elements[1].toString());
      }
    }

  }

  /*
  Called in the event that the config.properties file is missing, can be used to see some defaults
  but the logging framework should be notified
   */

  public setDefaults() {
    this.setKey('baseURL', 'http://localhost:8090');
  }
  /*
   Sets a key to a given value inserting that key if is does not exist.
   Will over write an existing value without a check
   */

  public setKeyValuePair(aKey: string, aValue: string) {
    this.setKey(aKey, aValue);
  }

  private setKey(key: string, value: string) {
    this.dictionary[key] = value;
  }

  public getKey(key: string): string {

    if (this.dictionary.hasOwnProperty(key)) {
      return this.dictionary[key].valueOf();
    } else {
      return '';
    }
  }

  // public getData(obs:Subscriber<any>) {
  //   Observable.from (this.dictionary).subscribe(obs);
  // }

}

