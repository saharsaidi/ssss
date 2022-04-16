import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Salarie } from './salarie';

@Injectable({
  providedIn: 'root'
})
export class SalarieService {

  private apiURL = "http://localhost:8000/api/salarie/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  getAll():Observable<any>{
    return this.httpClient.get<Salarie[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
      )
  }
  create(salarie:Salarie): Observable<any> {
    return this.httpClient.post<Salarie>(this.apiURL, JSON.stringify(salarie), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id_s:number): Observable<any>{
    return this.httpClient.get<Salarie>(this.apiURL + id_s)
    .pipe(
      catchError(this.errorHandler)
    )
  }
update(id_s:number, salarie:Salarie): Observable<any> {
    return this.httpClient.put<Salarie>(this.apiURL + id_s, JSON.stringify(salarie), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
delete(id_s:number){
    return this.httpClient.delete<Salarie>(this.apiURL + id_s, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


}
