import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { LinechartComponent } from './core/linechart/linechart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';
import { MydataService } from './core/services/mydata.service';
import { HttpClientModule }    from '@angular/common/http';
import { WeatherlocationsearchService } from './core/services/weatherlocationsearch.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LinechartComponent,
    HomepageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MydataService, WeatherlocationsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }