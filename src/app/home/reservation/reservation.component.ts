import { SettlementComponent } from './../settlement/settlement.component';
import { RestDataApiService } from './../../shared/services/rest-data-api.service';
import { RestApiService } from './../../shared/services/rest-api.service';
import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  firstName: string;
  lastName: string;

 
  public momentDate: moment.Moment;
  bookingData={ 
  bookingDate: moment(),bookingFromDate : moment(),bookingToDate:moment().add(1, 'days'),bookingFromTime:moment().format("HH:mm"),
  bookingToTime:moment().format("HH:mm"),regularGuest: '', regularGuestNo: '', guesture: '', guestName:'', companyName:'',phoneNo:'', 
  city:'', emailId:'', bookingStatus:'', roomType:'', noOfRooms:'',pax:'',bookingId:'',instructionsFor:'',pickupDetails:'',advance:0,settleList:''
  }


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

  constructor(public restDataApiService:RestDataApiService,public api: RestApiService,
    private renderer: Renderer,public dialog: MatDialog) {

    
  
   }

  ngOnInit() {

    this.firstName = 'Alec';
    this.lastName = 'Thompson';
    this.bookingData.regularGuest="no";
    this.restDataApiService.getGuestureDataList();
    this.restDataApiService.getCompanyDataList();
    this.restDataApiService.getTodayBookingDataList();
    this.restDataApiService.getBookingStatusDataList();
    this.restDataApiService.getRoomTypeDataList();
  }


  
  openSettlementDialog(advAmount){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      amount: advAmount,
  };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(SettlementComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => {  
          
          if(data==true ){
          this.bookingData.settleList=this.restDataApiService.settleListData; 
          this.restDataApiService.saveReservationData(this.bookingData);
          }
          console.log("Dialog output:", data );
    }
    );    
    
  }

  openError(error){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      error: error,
  };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ErrorDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
    
  }

 

  saveBooking(){
if(this.bookingData.guesture==null || this.bookingData.guesture==''){
  this.openError("Choose Guesture!");
  
}else if(this.bookingData.guestName==null || this.bookingData.guestName==''){
  this.openError("Enter The Guest Name!");
 
}else if(  this.bookingData.companyName!='0') {
 
  this.openError("Choose Company Name!");

}else if(this.bookingData.phoneNo==null || this.bookingData.phoneNo=='' || this.bookingData.phoneNo=='0'){
  this.openError("Enter The Phone!");
}else if(this.bookingData.bookingStatus==null || this.bookingData.bookingStatus==''){
  this.openError("Choose Booking Status!");
}else if(this.bookingData.roomType==null || this.bookingData.roomType==''){
  this.openError("Choose RoomType");
}else if(this.bookingData.noOfRooms==null || this.bookingData.noOfRooms=='' || this.bookingData.noOfRooms=='0'){
  this.openError("Enter The Rooms");
}else if(this.bookingData.pax==null || this.bookingData.pax==''  || this.bookingData.pax=='0'){  
  this.openError("Enter The Pax");
}else{
  this.saveCheckGuestName();
}
//alert(this.bookingData.guesture);
  }
  saveCheckGuestName(){
   
    this.api.checkGuestList(this.bookingData.guestName)
      .subscribe((res: any) => {
       // alert("res.."+res);
       if(res!==null){
        alert("Guest Name Already Exist");
        const element = this.renderer.selectRootElement('#input1');
        element.focus()
          
       }else{
         if(this.bookingData.advance!==null && this.bookingData.advance!==0 ){
          this.openSettlementDialog(this.bookingData.advance);
         }else{
          this.bookingData.settleList=this.restDataApiService.settleListData; 
          this.restDataApiService.saveReservationData(this.bookingData);
//alert("save");
         }
       
       }
      }, err => {
        console.log(err);
      });
  


}


  checkGuestName(){
   
      this.api.checkGuestList(this.bookingData.guestName)
        .subscribe((res: any) => {
         // alert("res.."+res);
         if(res!==null){
          alert("Guest Name Already Exist");
          const element = this.renderer.selectRootElement('#input1');
          element.focus()
          
         }
        }, err => {
          console.log(err);
        });
    

  
  }


}
