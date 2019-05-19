import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { MydataService } from '../core/services/mydata.service';
import { WeatherlocationsearchService } from '../core/services/weatherlocationsearch.service';

import * as vega from 'vega';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cities: any[] = [];
  queryField: FormControl = new FormControl('');
  constructor(private mydataService: MydataService,
  private myWeatherlocationsearchService: WeatherlocationsearchService) {  }

  ngOnInit() {

    console.log('During search init');
/*

    this.queryField.valueChanges
       .debounceTime(200)
       .subscribe(
            queryString => {
               this.myWeatherlocationsearchService.searchLocation(queryString)
            }
            )

       .subscribe(
        result => {
            console.log('Query returned');
            console.log(result);

            results = result;
        }
        )

     ;
     */

      this.queryField.valueChanges
            .debounceTime(500)
            .subscribe(
            term => {
               if (term != '') {
                 this.myWeatherlocationsearchService.searchLocation(term).subscribe(
                   data => {
                     this.cities = data as any[];
                     console.log('Get from Service as data array') ;
                     console.log(data);
                 })
               }
           }) ;


/*

    this.mydataService.getSpec()
              .subscribe(spec => {

                this.vegaInit(spec);
              }
              ,
              err => {
                console.log('yyy   Something went wrong '+err);
              }

              );
              */

  }



  public vegaInit(spec: any) {
   var view1 = new vega.View(vega.parse(spec))
      .renderer('svg')  // set renderer (canvas or svg)
      .initialize("#vegabox") // initialize view within parent DOM container
      .hover()             // enable hover encode set processing
      .run();


  }
}
