import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class WeatherlocationsearchService {
  apiKey: string = 'ADgKDhujgzeWoJzneLPd3jPlcDnaajLF';
  baseUrl: string = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=ADgKDhujgzeWoJzneLPd3jPlcDnaajLF&q=';

  sb: any;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
        console.log('http:'+ this.http+" snackbar:"+ this.snackBar);
        console.log(this.snackBar);
        this.sb=this.snackBar;
  }

  searchLocation (queryString: string): Observable<any>{
     let _URL = this.baseUrl + queryString;
     console.log('Query --> '+_URL) ;
     return this.http.get(_URL).pipe(
                 map( spec => {

                    return spec;
               }),
          //  catchError(this.handleError)
          catchError( this.sb.open("Auto complete stop working after exceeding 50 free API queries. Please just hit the Tell me! button for the sample data.",
                                    'Dismiss', {
                                     duration: 8000}))
                                                     );


  }

  




}
