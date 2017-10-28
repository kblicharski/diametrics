import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {
  private static baseUrl = 'https://archhacks2017project.firebaseio.com/.json';

  constructor(private http: HttpClient) {}

  get(): Observable<Object> {
    const url = RestService.baseUrl;
    return this.http.get(url);
  }

  put(): Observable<Object> {
    const url = RestService.baseUrl;
    const data = {
      'alanisawesome': {
        'name': 'Alan Turing',
        'birthday': 'June 23, 1912'
      }
    };
    return this.http.put(url, data);
  }

  delete(): Observable<Object> {
    const url = RestService.baseUrl;
    return this.http.delete(url);
  }

}
