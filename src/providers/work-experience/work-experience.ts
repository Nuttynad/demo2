import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

@Injectable()
export class WorkExperienceProvider{
     constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello WorkExperienceProvider Provider');
  }

  updateWorkExperience(work) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "api/workexperience", work, options).toPromise();
  }
}


