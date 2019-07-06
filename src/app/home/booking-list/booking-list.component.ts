import { RestDataApiService } from './../../shared/services/rest-data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  constructor(public restDataApiService:RestDataApiService) { }

  columnDefs = [
    { displayName: 'Actions', cellTemplate: 
             '<div class="grid-action-cell">'+
             '<a (click)="deleteThisRow(row.entity);" >Delete</a></div>'},
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

  ngOnInit() {
    this.restDataApiService.getBookingList();
  }

}
