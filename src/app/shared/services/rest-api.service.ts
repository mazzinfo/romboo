import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // apiUrl = 'http://192.168.1.6:8080/roomapi/';

  apiUrl = 'http://192.168.1.5:8080/roomapi/';

  constructor(private http: HttpClient) {


  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;

    } else {
      errorMessage = 'Error Code:' + error.status + '\nMessage:' + error.message;
    }

    return throwError(errorMessage);
  }

  getCurrentRoomStatus(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'roomCurrentStatus').pipe(retry(1), catchError(this.handleError));
  }

  getTotalRoomStatus(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'totalRoomStatus').pipe(retry(1), catchError(this.handleError));
  }
}
