import { RestDataApiService } from './../../shared/services/rest-data-api.service';
import { RestApiService } from './../../shared/services/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  firstName: string;
  lastName: string;
  public momentDate: moment.Moment;
  
  bookingDate = moment();
  bookingFromDate = moment();
  bookingToDate=moment().day(3);

  bookingFromTime=moment().format("HH:mm");
  bookingToTime=moment().format("HH:mm");


  columnDefs = [
    {headerName: 'Guest Name', field: 'make' },
    {headerName: 'Company Name', field: 'make' },
    {headerName: 'Phone No', field: 'model' },
    {headerName: 'From Date', field: 'price'},
    {headerName: 'To Date', field: 'price'},
    {headerName: 'Advance', field: 'price'},
    {headerName: 'Booking Id', field: 'price'},
    {headerName: 'Room Type', field: 'price'},
    {headerName: 'No Of Pax', field: 'price'},
];

rowData = [
    // { make: 'Dlx', model: 'Celica', price: 35000 },
    // { make: 'Ford', model: 'Mondeo', price: 32000 },
    // { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  constructor(public restDataApiService:RestDataApiService) {

    
  
   }

  ngOnInit() {

    this.firstName = 'Alec';
    this.lastName = 'Thompson';
    this.restDataApiService.getGuestureDataList();
    this.restDataApiService.getCompanyDataList();
  }

}
