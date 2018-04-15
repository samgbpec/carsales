import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { CarService } from '../_services/car.service';
import { Http, ConnectionBackend } from '@angular/http';
import { AppConfig } from './app.config';
import { FilterPipe } from '../_pipes/filter';
import { GlobalErrorHandler } from '../error.handler';

const _appRoutes: Routes = [
  { path: '',
    redirectTo: '/cars',
    pathMatch: 'full'
  },
  {
    path: 'cars',
    component: CarsComponent,
    data: { title: 'Cars' }
  },
  {
    path: 'cardetails/:id',
    component: CardetailsComponent,
    data: { title: 'Car details' }
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '/cars' }
  
];


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CardetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(_appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [
    CarService,
    AppConfig,
    {
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
