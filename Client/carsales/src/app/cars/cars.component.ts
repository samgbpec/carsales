import { Component, OnInit } from '@angular/core';
import { Car } from '../../_models/car';
import { CarService } from '../../_services/car.service';
import { FilterPipe } from '../../_pipes/filter';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  //to pass the search term to filter pipe
  _term="";

  public _cars$:Observable<Car[]>;

  constructor(private _carService:CarService) {   
  }


  ngOnInit() {

    //obervable subscription and unsubscription to be taken care by async pipe in template
    this._cars$ = this._carService.ListCars();
  }

}
