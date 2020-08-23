import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const host = 'http://54.202.218.249:9501';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getresult(url): Observable<any> {
    return this.http.get(host + url);
  }

  delete(url): Observable<any> {
    return this.http.delete(host + url);
  }
  postresult(url, data): Observable<any> {
    return this.http.post(host + url, data);
  }
}
