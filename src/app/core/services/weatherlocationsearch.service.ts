import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class WeatherlocationsearchService {
  apiKey: string = 'ADgKDhujgzeWoJzneLPd3jPlcDnaajLF';
  baseUrl: string = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=ADgKDhujgzeWoJzneLPd3jPlcDnaajLF&q=';


  constructor(private http: HttpClient) {

  }

  searchLocation (queryString: string): Observable<any>{
     let _URL = this.baseUrl + queryString;

     return this.http.get(_URL).pipe(
                 map( spec => {
                    return spec;
               }),
          catchError(this.handleError)
     );

}

  private handleError(error: HttpErrorResponse) {

           console.error('server error:'+error);

            window.alert('Auto complete will stop working after exceeding 50 free daily API queries. Please just hit the Tell me! button for the sample data.');

           if (error.error instanceof Error) {
               let errMessage = error.error.message;
               return Observable.throw(errMessage);

           }
           return Observable.throw(error || 'server side error');

  }






}
