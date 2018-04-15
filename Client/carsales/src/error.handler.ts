import { ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(error) {
     console.log('Some error occurred');
     //Call logging service and save to database --TO DO
  }
  
}