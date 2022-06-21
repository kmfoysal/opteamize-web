import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CalculationModel } from '../models/CalculationModel';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  private apiUrl: string = `http://localhost:5000` ;

  constructor(private httpClient: HttpClient) {

  }


  // Get All Calculations

  public getAllCalculations():Observable<CalculationModel[]>{
    let url:string = `${this.apiUrl}/calculations`;
    return this.httpClient.get<CalculationModel[]>(url).pipe(catchError(this.handleError))
  }


  // Create Calculations

   public createCalculations(calculation: CalculationModel):Observable<CalculationModel>{
    let url:string = `${this.apiUrl}/calculations`;
    return this.httpClient.post<CalculationModel>(url,  calculation).pipe(catchError(this.handleError))
  }


  // Error Handeling

public handleError (error: HttpErrorResponse){

  let errorMsg : string = '';

  if(error.error instanceof ErrorEvent){

    // Client Error
    errorMsg = `Error: ${error.error.message}`
  }else{
    // Server Error
    errorMsg = `Status: ${error.status} \n Message: ${error.message}`
  }

  return throwError(errorMsg);
}


}

