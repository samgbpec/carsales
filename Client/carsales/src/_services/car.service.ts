import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Car } from '../_models/car';
import { AppConfig } from '../app/app.config';

@Injectable()
export class  CarService {  

    
    constructor(private _http: Http, private _config:AppConfig) { }
 
   
    public ListCars = (): Observable<Car[]> => {
        console.log(this._config.apiUrl+'/car');
        return this._http.get(this._config.apiUrl+'/car').map(res => res.json());
       
    }

    public CarDetails = (Id:number): Observable<Car> => {
        return this._http.get(this._config.apiUrl+'/car/'+Id).map(res => res.json());
     }
    
    
   
}