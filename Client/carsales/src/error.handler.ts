import { ErrorHandler, Injectable} from '@angular/core';

//Global handler to log all errors
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(error) {
     console.log('Some error occurred' + error);
     //Call logging service and save to database --TO DO -- NOT IMPLEMENTED FOR NOW
  }
  
}