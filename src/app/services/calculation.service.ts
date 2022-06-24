import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Job } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  private apiUrl: string = `http://localhost:5000` ;

  constructor(private httpClient: HttpClient) {

  }


  // Get All Calculations

  public getAllCalculations():Observable<Job[]>{
    let url:string = `${this.apiUrl}/calculations`;
    return this.httpClient.get<Job[]>(url).pipe(catchError(this.handleError))
  }


  // Get single Calculation

  public getSingleCalculations(calculationId:string):Observable<Job>{
    let url:string = `${this.apiUrl}/calculations/${calculationId}`;
    return this.httpClient.get<Job>(url).pipe(catchError(this.handleError))
  }


  // Create Calculations

   public createCalculations(calculation: Job):Observable<Job>{
    let url:string = `${this.apiUrl}/calculations`;
    return this.httpClient.post<Job>(url,  calculation).pipe(catchError(this.handleError))
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

