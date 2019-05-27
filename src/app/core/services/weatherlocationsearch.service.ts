import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class WeatherlocationsearchService {
  apiKey: string = 'ADgKDhujgzeWoJzneLPd3jPlcDnaajLF';
  baseUrl: string = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=ADgKDhujgzeWoJzneLPd3jPlcDnaajLF&q=';


  constructor(private http: HttpClient) { }

  searchLocation (queryString: string){
     let _URL = this.baseUrl + queryString;
     console.log('Query -ab--> '+_URL) ;
     return this.http.get(_URL).pipe(
                                       
                                       catchError(this.handleError)
                                     );;


  }

   private handleError(error: HttpErrorResponse) {
             console.error('autocomplete  error:', error);

        window.alert("Auto complete stop working after exceeding 50 free API queries. Please just hit the search button for the sample data.");
   }

}
