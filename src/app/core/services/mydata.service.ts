import { Injectable } from '@angular/core';
import { Search } from '../../shared/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class MydataService {

  itemBaseUrl: string = 'http://127.0.0.1:8999/api/myitems'
  vegaBaseUrl: string = 'http://127.0.0.1:8999/api/myheroesspec'


  constructor(private http: HttpClient) { }


   getSpec(): Observable<string> {
            return this.http.get<string>(this.vegaBaseUrl)
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
