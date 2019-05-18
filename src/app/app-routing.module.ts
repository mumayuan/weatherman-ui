import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';


const app_routes: Routes = [
   { path: '', redirectTo: 'homepage', pathMatch: 'full' },
   { path: 'homepage', component: HomepageComponent },
   { path: 'search', component: SearchComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(app_routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
