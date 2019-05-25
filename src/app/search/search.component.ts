import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { MydataService } from '../core/services/mydata.service';
import { WeatherlocationsearchService } from '../core/services/weatherlocationsearch.service';

/*import * as vega from 'vega';*/
import embed from 'vega-embed';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  content: any;
  weather: any;
  date: any;
  fiveDays: any;
  cities: any[] = [];
  queryField: FormControl = new FormControl('');
  constructor(private mydataService: MydataService,
  private myWeatherlocationsearchService: WeatherlocationsearchService) {  }

  ngOnInit() {

    console.log('During search init');


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




  }

  reset(){
    this.queryField.reset();
    this.weather = null;
  }
  getWeather(){
     console.log('Clicked '+ this.queryField);

     console.log(this.queryField);
     //console.log('selected '+ this.queryField.value.Key + " of "+ this.queryField.value.LocalizedName);
     this.content = this.queryField.value;


    console.log(this.content);

    var key = 'stuff'
    if(this.content){
        key =  this.content.key;
    }
    console.log('selected key-> '+ key) ;
        this.mydataService.getForecast( key)
                  .subscribe(response => {

                    /*this.vegaInit(spec);*/
                    console.log('get from API gateway');
                    console.log(response);
                    console.log(response.weather);
                    this.weather = response.weather;
                    this.date = response.date;
                    this.fiveDays = response.fivedays;
                    this.vegaInit(response.vega);
                  }
                  ,
                  err => {
                    console.log('yyy   Something went wrong '+err);
                  }

                  );

  }

  public vegaInit(spec: any) {
   console.log('vega init '+spec);
   console.log(spec);

   /*var view1 = new vega.View(vega.parse(spec))
      .renderer('svg')  // set renderer (canvas or svg)
      .initialize("#vegabox") // initialize view within parent DOM container
      .hover()             // enable hover encode set processing
      .run();
*/
    embed("#vegabox", spec, { actions: false });

  }

  displayFn(city) {
    if(! city ) return '';
    else return city.LocalizedName+ ', ' + city.AdministrativeArea.LocalizedName + ', '+ city.Country.LocalizedName;
  }
}
