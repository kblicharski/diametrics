import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {
  private static baseUrl = 'http://54.89.230.73:8080/bloodglucoseevents/?format=json';

  constructor(private http: HttpClient) {}

  get(): Observable<Object> {
    const url = RestService.baseUrl;
    return this.http.get(url);
  }

  put(data: Object): Observable<Object> {
    const url = RestService.baseUrl;
    return this.http.put(url, data);
  }

  delete(): Observable<Object> {
    const url = RestService.baseUrl;
    return this.http.delete(url);
  }

}
