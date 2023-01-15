import { Injectable } from '@angular/core';
import { catchError, map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

import { TriangleModel } from '../models/triangle.model';

export class Triangle {
  base!: String;
  height!: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Node/Express API
  REST_API: string = 'http://localhost:8000/caluleteArea';

  // HttpHeaders
  httpHearders = new HttpHeaders().set('Content-Type','application/json');
  
  constructor(private httpClient: HttpClient) { }

  // getPosts(){
  //   return this.httpClient.get<TriangleModel[]>(`${this.REST_API}`)
  // }

  //restful api
  getAreaTriangle(data: Triangle){
    let API_URL = `${this.REST_API}`;
    return this.httpClient.post(API_URL,data)
      .pipe(
        catchError(this.handleError)
      )
  }
  
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //cliend error
      errorMessage = error.error.message;
    }else{
      //serve error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    return errorMessage
  }

}
