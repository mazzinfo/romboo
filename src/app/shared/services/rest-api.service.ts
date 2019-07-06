import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // apiUrl = 'http://192.168.1.6:8080/roomapi/';

  apiUrl = 'http://192.168.1.2:8090/roomapi/';

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


  getBookingList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'bookingList').pipe(retry(1), catchError(this.handleError));
  }

  getGuestureList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'guestureList').pipe(retry(1), catchError(this.handleError));
  }


  getGuestList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'guestList').pipe(retry(1), catchError(this.handleError));
  }

  
  getSettleList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'settleList').pipe(retry(1), catchError(this.handleError));
  }

  getCompanyList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'companyList').pipe(retry(1), catchError(this.handleError));
  }

  getBookingStatusList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'bookingStatusList').pipe(retry(1), catchError(this.handleError));
  }

  checkGuestList(guestName): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'checkGuest/'+guestName).pipe(retry(1), catchError(this.handleError));
  }

  saveReservation(bookingData): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'saveReservation', bookingData).pipe(retry(1), catchError(this.handleError));
  }
  
  getRoomTypeList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'roomTypeList').pipe(retry(1), catchError(this.handleError));
  }


  getTodayBookingList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'todayBookingList').pipe(retry(1), catchError(this.handleError));
  }

  getTotalRoomStatus(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'totalRoomStatus').pipe(retry(1), catchError(this.handleError));
  }
}
