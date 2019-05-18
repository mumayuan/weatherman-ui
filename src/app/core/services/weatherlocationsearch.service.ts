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
     console.log('Query '+_URL) ;
     var response = this.http.get(_URL).subscribe((res)=> {
       console.log('Query In service');
       console.log(res);
       console.log('First City : '+res[0].LocalizedName);
     });

     return response;
  }

}
