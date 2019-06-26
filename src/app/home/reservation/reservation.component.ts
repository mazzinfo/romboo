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
  regularGuest: string;
  regularGuestNo: string;
  public momentDate: moment.Moment;
  
  bookingDate = moment();
  bookingFromDate = moment();
  bookingToDate=moment().add(1, 'days');

  bookingFromTime=moment().format("HH:mm");
  bookingToTime=moment().format("HH:mm");

  fromMinDate= moment().add(-1, 'days');
  toMinDate= moment().add(-1, 'days');

  columnDefs = [
    {headerName: 'Guest Name', field: 'guestName',sortable: true, filter: true },
    {headerName: 'Company Name', field: 'debtorName',sortable: true, filter: true },
    {headerName: 'Phone No', field: 'phone',sortable: true, filter: true },
    {headerName: 'From Date', field: 'fromDate',sortable: true, filter: true},
    {headerName: 'To Date', field: 'toDate',sortable: true, filter: true},
    {headerName: 'Advance', field: 'amount',sortable: true, filter: true},
    {headerName: 'Booking Id', field: 'price',sortable: true, filter: true},
    {headerName: 'Room Type', field: 'roomType',sortable: true, filter: true},
    {headerName: 'No Of Pax', field: 'pax',sortable: true, filter: true},
    {headerName: 'Bill Instr', field: 'billinstr',sortable: true, filter: true},
    {headerName: 'Address', field: 'address',sortable: true, filter: true },
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
    this.regularGuest="no";
    this.restDataApiService.getGuestureDataList();
    this.restDataApiService.getCompanyDataList();
    this.restDataApiService.getTodayBookingDataList();
    this.restDataApiService.getBookingStatusDataList();
    this.restDataApiService.getRoomTypeDataList();
  }

}
