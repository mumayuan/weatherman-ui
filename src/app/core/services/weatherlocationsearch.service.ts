import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class WeatherlocationsearchService {

  baseUrl: string = 'https://www.metaweather.com/api/location/search/?query='

  constructor() { }
/*
  searchLocation (queryString: string){
     let _URL = this.baseUrl + queryString;
     return this._http.get(_URL);
  }
  */
}
