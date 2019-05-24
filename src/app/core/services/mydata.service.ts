import { Injectable } from '@angular/core';
import { Search } from '../../shared/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class MydataService {

  apiGateWayURL: string = 'https://7bvg5o5zna.execute-api.us-east-1.amazonaws.com/default/WeatherServiceJava?location='



  constructor(private http: HttpClient) { }


   getForecast(location: string): Observable<any> {
            return this.http.get<string>(this.apiGateWayURL+ location)
                .pipe(
                    map( spec => {
                        return spec;
                    }),
                    catchError(this.handleError)
                );
    }


   private handleError(error: HttpErrorResponse) {
           console.error('server error:', error);
           if (error.error instanceof Error) {
               let errMessage = error.error.message;
               return Observable.throw(errMessage);
               // Use the following instead if using lite-server
               //return Observable.throw(err.text() || 'backend server error');
           }
           return Observable.throw(error || 'Node.js server error');
   }

}
