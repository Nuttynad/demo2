import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

@Injectable()
export class JobServiceProvider {

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello JobServiceProvider Provider');
  }

  getAll() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "api/jobs", options).toPromise();
  }

  getAllBookmarks() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "api/bookmarks", options).toPromise();
  }

  addToBookmarks(job) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "api/bookmarks", job, options).toPromise();
  }

  removeFromBookmarks(job) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "api/bookmarks", options).toPromise();
  }
  
  applyForJob(job) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "api/apply", job, options).toPromise();
  }
}
