import { Component, OnInit } from '@angular/core';
import { Car } from '../../_models/car';
import { CarService } from '../../_services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {

  _car:Car;
  _id:number;
  _sub:any;

  constructor(private _carService:CarService, private _route: ActivatedRoute) { 
    
  }
  

  ngOnInit() {

    //subscrive to get id parameter value
    this._sub = this._route.params.subscribe(params => {
      this._id = +params['id']; 
   });

   //get the car details
   this._sub.add(this._carService.CarDetails(this._id).subscribe(res=>{
    this._car=res;
    console.log(this._car);
  }));

   
  }


  //unsubscribe observable
  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}
