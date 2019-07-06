import { RestDataApiService } from './../../shared/services/rest-data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

   gridApi:any;
  gridColumnApi:any;

  constructor(public restDataApiService:RestDataApiService) { }

  columnDefs = [
    {headerName: 'Guest Name', field: 'guestName',sortable: true, filter: true ,checkboxSelection: true ,pinned:"left"},
    {headerName: 'Company Name', field: 'debtorName',sortable: true, filter: true,pinned:"left" },
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


onSelectionChanged() {
  var selectedRows = this.gridApi.getSelectedRows();
  var selectedRowsString = "";
  selectedRows.forEach(function(selectedRow, index) {
    if (index !== 0) {
      selectedRowsString += ", ";
    }
    selectedRowsString += selectedRow.guestName;
  });
console.log("selectedRowsString.."+selectedRowsString);

  document.querySelector("#selectedRows").innerHTML = selectedRowsString;
}

getSelectedBooking(){
  console.log("selectedRowsString.."+this.gridApi.getSelectedRows()[0].guestName);
}


onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  
}

  ngOnInit() {
    this.restDataApiService.getBookingList();
  }

}
