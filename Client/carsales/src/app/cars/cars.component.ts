import { Component, OnInit } from '@angular/core';
import { Car } from '../../_models/car';
import { CarService } from '../../_services/car.service';
import { FilterPipe } from '../../_pipes/filter';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  _cars:Car[];
  term="";

  constructor(private _carService:CarService) { 
   
  }

 

  ngOnInit() {
    this._carService.ListCars().subscribe(res=>this._cars=res);
  }

}
