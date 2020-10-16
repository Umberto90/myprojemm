import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AppService {

  private HeroesbyIdUrl = 'https://www.superheroapi.com/api.php/3846343545384978/23'
  private urlocalapi = 'http://localhost:3000/url'

  constructor(private http: HttpClient) { 

    let array = new Array
  }

  getLocalApi(): Observable<[{}]> {
    return this.http.get<[{}]>(this.urlocalapi)
  }

  getCurrentVersionApi(): Observable<[{}]> {
    return this.http.get<[{}]>(this.urlocalapi)
  }

  getHeroesById(): Observable<[{}]> {
    return this.http.get<[{}]>(this.HeroesbyIdUrl)
  }

  getHeroes() : Observable<[]>  {
    return this.http.get<[]>(this.HeroesbyIdUrl)
  }

}