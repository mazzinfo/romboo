import { SettlementComponent } from './../settlement/settlement.component';
import { RestDataApiService } from './../../shared/services/rest-data-api.service';
import { RestApiService } from './../../shared/services/rest-api.service';
import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer } from '@angular/core';
import * as moment from 'moment';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { BookingListComponent } from '../booking-list/booking-list.component';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

bookingName='New Booking';
bookingListName='Today Booking List';

isReadOnly=false;

saveBookingBtn=true;
updateBookingBtn=false;
deleteBookingBtn=false;
  newGuest = true;
  oldGuest = false;
  reservationGuest=false;
  gridApi:any;
  gridColumnApi:any;


  public momentDate: moment.Moment;
  bookingData = {
    bookingDate: moment(), updateFromDate:'',updateToDate:'',bookingFromDate: moment(), bookingToDate: moment().add(1, 'days'), bookingFromTime: moment().format("HH:mm"),
    bookingToTime: moment().format("HH:mm"), regularGuest: '', regularGuestNo: '', guesture: '', guestId: '', guestName: '',editGuestName:'', companyName: '', phoneNo: '',
    city: '', emailId: '', bookingStatus: '', roomType: '', noOfRooms: '', pax: '',bookingPcKey:'', bookingId: '',linePcKey:'', instructionsFor: '', pickupDetails: '', advance: 0, settleList: ''
  }
  term: string = '';

  searchFn(ev: any){
    this.term = ev.target.value;
  }

  getFromDate(event){
    console.log("date.."+moment(event.value).format('DD MMM YYYY hh:mm a'));
    
    this.bookingData.bookingFromDate=moment(this.bookingData.bookingFromDate,'YYYY-MM-DD');
    console.log("date  value.."+moment(this.bookingData.bookingFromDate).format('YYYY-MM-DD'));
  }



  fromMinDate = moment().add(-1, 'days');
  toMinDate = moment().add(-1, 'days');

  columnDefs = [

    { headerName: 'Guest Name', field: 'guestName', sortable: true, filter: true },
    { headerName: 'Company Name', field: 'debtorName', sortable: true, filter: true },
    { headerName: 'Phone No', field: 'phone', sortable: true, filter: true },
    { headerName: 'From Date', field: 'fromDate', sortable: true, filter: true },
    { headerName: 'To Date', field: 'toDate', sortable: true, filter: true },
    { headerName: 'Advance', field: 'amount', sortable: true, filter: true },
    { headerName: 'Booking Id', field: 'price', sortable: true, filter: true },
    { headerName: 'Room Type', field: 'roomType', sortable: true, filter: true },
    { headerName: 'No Of Pax', field: 'pax', sortable: true, filter: true },
    { headerName: 'Bill Instr', field: 'billinstr', sortable: true, filter: true },
    { headerName: 'Address', field: 'address', sortable: true, filter: true },
  ];

  
  bookingEditcolumnDefs = [
    
    {headerName: 'bookingPcKey', field: 'bookingPcKey',sortable: true, filter: true,hide:true },
    {headerName: 'Guest Name', field: 'guestName',sortable: true, filter: true,hide:true },
    {headerName: 'Company Name', field: 'debtorName',sortable: true, filter: true,hide:true},
    {headerName: 'Phone No', field: 'phone',sortable: true, filter: true,hide:true },
    {headerName: 'From Date', field: 'fromDate',sortable: true, filter: true,checkboxSelection: true ,pinned:"left"},
    {headerName: 'To Date', field: 'toDate',sortable: true, filter: true,pinned:"left"},
    {headerName: 'Advance', field: 'amount',sortable: true, filter: true,pinned:"left"},
    {headerName: 'Booking Id', field: 'price',sortable: true, filter: true,hide:true},
    {headerName: 'arrivalMode', field: 'arrivalMode',sortable: true, filter: true,hide:true},
    {headerName: 'Room Type', field: 'roomType',sortable: true, filter: true},
    {headerName: 'No Of Rooms', field: 'noOfRooms',sortable: true, filter: true},
    {headerName: 'No Of Pax', field: 'pax',sortable: true, filter: true},
    {headerName: 'Bill Instr', field: 'billinstr',sortable: true, filter: true},
    {headerName: 'linePcKey', field: 'linePcKey',sortable: true, filter: true,hide:true},
    {headerName: 'PicKup Details', field: 'picKupDetails',sortable: true, filter: true },
];
fromTimeChange(event){
  this.bookingData.bookingFromTime=moment(event).format("HH:mm");
  console.log("from time.."+ this.bookingData.bookingFromTime);
}

updateReservation(){
  console.log('...'+this.bookingData.bookingFromTime  );
  console.log('tttt'+moment(this.bookingData.bookingFromTime,'h:mm a').format('HH:mm'));
  this.bookingData.bookingFromTime=moment(this.bookingData.bookingFromTime,'h:mm a').format('HH:mm');
  this.bookingData.bookingToTime=moment(this.bookingData.bookingToTime,'h:mm a').format('HH:mm');
  this.bookingData.updateFromDate=''+moment(this.bookingData.bookingFromDate).format('YYYY-MM-DD');
  this.bookingData.updateToDate=''+moment(this.bookingData.bookingToDate).format('YYYY-MM-DD');
  this.updateReservationData(this.bookingData);
}

async updateReservationData(bookingData) {
  this.api.updateReservation(bookingData)
    .subscribe((res: any[]) => {
      if(res!=null){
        this.restDataApiService.bookingGuestListData = [];
        this.setIntialData();
     alert("Booking is successfully updated");
      }
     
    }, err => {
      console.log(err);
    });
}


getSelectedBooking(event){
  console.log("selectedRowsString.."+this.gridApi.getSelectedRows()[0].arrivalMode);

  this.bookingData.bookingPcKey=this.gridApi.getSelectedRows()[0].bookingPcKey;
  this.bookingData.linePcKey=this.gridApi.getSelectedRows()[0].linePcKey;
  this.bookingData.bookingDate=moment(this.gridApi.getSelectedRows()[0].bookingDate);
  this.bookingData.bookingFromDate=moment(this.gridApi.getSelectedRows()[0].fromDate);
  this.bookingData.bookingFromTime=moment(this.gridApi.getSelectedRows()[0].fromDate).format("HH:mm");
  this.bookingData.bookingToDate=moment(this.gridApi.getSelectedRows()[0].toDate);
  this.bookingData.bookingToTime=moment(this.gridApi.getSelectedRows()[0].toDate).format("HH:mm");
  this.bookingData.bookingStatus= this.restDataApiService.bookingStatusListData.filter(x => x.arrivalCode === Number(this.gridApi.getSelectedRows()[0].arrivalMode))[0].arrivalCode;
  this.bookingData.roomType = this.restDataApiService.roomTypeListData.filter(x => x.typeName === this.gridApi.getSelectedRows()[0].roomType)[0].roomTypeCode;
 
  this.bookingData.noOfRooms=this.gridApi.getSelectedRows()[0].noOfRooms;
  this.bookingData.pax=this.gridApi.getSelectedRows()[0].pax;
  this.bookingData.pickupDetails=this.gridApi.getSelectedRows()[0].picKupDetails;
  this.bookingData.instructionsFor=this.gridApi.getSelectedRows()[0].billinstr;
  this.bookingData.advance=this.gridApi.getSelectedRows()[0].amount;
}

onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  
}


  rowData = [
    // { make: 'Dlx', model: 'Celica', price: 35000 },
    // { make: 'Ford', model: 'Mondeo', price: 32000 },
    // { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor(public restDataApiService: RestDataApiService, public api: RestApiService,
    private renderer: Renderer, public dialog: MatDialog) {



  }

  bookingAdd(){
    this.bookingName="New Booking";
    this.bookingListName='Today Booking List';
    this.updateBookingBtn=false;
    this.saveBookingBtn=true;
    this.deleteBookingBtn=false;
    this.bookingData.regularGuest = "no";
    this.newGuest = true;
    this.oldGuest = false;
    this.isReadOnly=false;
    this.setIntialData();
    this.restDataApiService.bookingGuestListData=[];
  }

  setIntialData(){
    this.bookingData.bookingDate= moment();
    this.bookingData. bookingFromDate= moment();
    this.bookingData.  bookingToDate=moment().add(1, 'days');
    this.bookingData.bookingFromTime=moment().format("HH:mm");
    this.bookingData. bookingToTime=moment().format("HH:mm");
    this.bookingData.updateFromDate='';
    this.bookingData.updateToDate='';
    this.bookingData.guesture= '';
    this.bookingData.guestId=''; 
    this.bookingData.guestName= ''
    this.bookingData.companyName= ''
    this.bookingData.phoneNo= '';
    this.bookingData.city= '';
    this.bookingData.emailId= '';
    this.bookingData.bookingStatus= '';
    this.bookingData.roomType= '';
    this.bookingData.noOfRooms= ''
    this.bookingData. pax= '';
    this.bookingData.bookingId= '';
    this.bookingData.instructionsFor= '';
    this.bookingData. pickupDetails= ''; 
    this.bookingData.advance=0; 
    this.bookingData.settleList= '';
    
  }

  bookingDelete(){
    this.bookingName="Delete Booking";
    this.bookingListName='Booking List';
    this.updateBookingBtn=false;
    this.saveBookingBtn=false;
    this.deleteBookingBtn=true;
    this.bookingData.regularGuest = "yes";
    this.newGuest = false;
    this.oldGuest = true;
    this.isReadOnly=true;
    this.setIntialData();
    this.restDataApiService.bookingGuestListData=[];
  
  }

  bookingEdit(){
    this.reservationGuest=true;
    this.bookingName="Edit Booking";
    this.bookingListName='Booking List';
    this.updateBookingBtn=true;
    this.saveBookingBtn=false;
    this.deleteBookingBtn=false;
    this.bookingData.regularGuest = "yes";
    this.newGuest = false;
    this.oldGuest = true;
    this.isReadOnly=true;
    this.setIntialData();
    this.restDataApiService.bookingGuestListData=[];
  }

  ngOnInit() {


    this.bookingData.regularGuest = "no";
    this.restDataApiService.getGuestureDataList();
    this.restDataApiService.getGuestDataList();
    this.restDataApiService.getCompanyDataList();
    this.restDataApiService.getTodayBookingDataList();
    this.restDataApiService.getBookingStatusDataList();
    this.restDataApiService.getRoomTypeDataList();
  }

  guestChange() {

    if (this.bookingData.regularGuest === 'yes') {

      this.oldGuest = true;
      this.newGuest = false;
      this.clearGuestform();

    } else {
      this.oldGuest = false;
      this.newGuest = true;
      this.clearGuestform();
    }
  }

  clearGuestform() {
    this.bookingData.guestId = '';
    this.bookingData.guestName = '';
    this.bookingData.companyName = '';
    this.bookingData.guesture = '';
    this.bookingData.phoneNo = '';
    this.bookingData.city = '';
    this.bookingData.emailId = '';
    this.bookingData.instructionsFor = '';
  }

  getguesture: any = [];
  guestSelect(guestData) {
if(this.updateBookingBtn || this.deleteBookingBtn){
    this.restDataApiService.getBookingGuestList(guestData.guestId);
}

    this.getguesture = this.restDataApiService.guestureListData.filter(x => x.description === guestData.mrMrs);


    this.bookingData.guestId = guestData.guestId;
    this.bookingData.guestName = guestData.guestName;
    this.bookingData.companyName = guestData.grpCode;
    this.bookingData.guesture = this.getguesture[0].pcKey;

    this.bookingData.phoneNo = guestData.phone;
    this.bookingData.city = guestData.city;
    this.bookingData.emailId = guestData.email;
    this.bookingData.instructionsFor = guestData.billInstr;

  }

  openSettlementDialog(advAmount) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      amount: advAmount,
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(SettlementComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {

        if (data == true) {
          this.bookingData.settleList = this.restDataApiService.settleListData;
          this.bookingData.bookingFromTime=moment(this.bookingData.bookingFromTime,'h:mm a').format('HH:mm');
          this.bookingData.bookingToTime=moment(this.bookingData.bookingToTime,'h:mm a').format('HH:mm');
          this.bookingData.updateFromDate=''+moment(this.bookingData.bookingFromDate).format('YYYY-MM-DD');
          this.bookingData.updateToDate=''+moment(this.bookingData.bookingToDate).format('YYYY-MM-DD');
          this.saveReservationData(this.bookingData);
        }
        console.log("Dialog output:", data);
      }
    );

  }

  
  async saveReservationData(bookingData) {
    this.api.saveReservation(bookingData)
      .subscribe((res: any[]) => {
        if(res!=null){
          this.restDataApiService.todayBookingListData = res;
          this.setIntialData();
       alert("Booking is successfully saved");
        }
      }, err => {
        console.log(err);
      });
  }


  openBookingList() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {

    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='50%';
    dialogConfig.width='100%';

    const dialogRef = this.dialog.open(BookingListComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {

        console.log("Dialog output:", data);
      }
    );

  }



  openError(error) {
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



  saveBooking() {
    if (this.bookingData.guesture == null || this.bookingData.guesture == '') {
      this.openError("Choose Guesture!");

    } else if (this.bookingData.guestName == null || this.bookingData.guestName == '') {
      this.openError("Enter The Guest Name!");

    } else if (this.bookingData.companyName != '0') {

      this.openError("Choose Company Name!");

    } else if (this.bookingData.phoneNo == null || this.bookingData.phoneNo == '' || this.bookingData.phoneNo == '0') {
      this.openError("Enter The Phone!");
    } else if (this.bookingData.bookingStatus == null || this.bookingData.bookingStatus == '') {
      this.openError("Choose Booking Status!");
    } else if (this.bookingData.roomType == null || this.bookingData.roomType == '') {
      this.openError("Choose RoomType");
    } else if (this.bookingData.noOfRooms == null || this.bookingData.noOfRooms == '' || this.bookingData.noOfRooms == '0') {
      this.openError("Enter The Rooms");
    } else if (this.bookingData.pax == null || this.bookingData.pax == '' || this.bookingData.pax == '0') {
      this.openError("Enter The Pax");
    } else {
      this.saveCheckGuestName();
    }
    //alert(this.bookingData.guesture);
  }
  saveCheckGuestName() {

    if (this.bookingData.guestId === '') {

      this.api.checkGuestList(this.bookingData.guestName)
        .subscribe((res: any) => {
          // alert("res.."+res);
          if (res !== null) {
            alert("Guest Name Already Exist");
            const element = this.renderer.selectRootElement('#input1');
            element.focus()

          } else {
            this.checkAdavanceDialog();

          }
        }, err => {
          console.log(err);
        });
    } else {
      this.checkAdavanceDialog();

    }


  }


  

  checkAdavanceDialog() {
    if (this.bookingData.advance !== null && this.bookingData.advance !== 0) {
      this.openSettlementDialog(this.bookingData.advance);
    } else {
      this.bookingData.settleList = this.restDataApiService.settleListData;
      this.bookingData.bookingFromTime=moment(this.bookingData.bookingFromTime,'h:mm a').format('HH:mm');
      this.bookingData.bookingToTime=moment(this.bookingData.bookingToTime,'h:mm a').format('HH:mm');
      this.bookingData.updateFromDate=''+moment(this.bookingData.bookingFromDate).format('YYYY-MM-DD');
  this.bookingData.updateToDate=''+moment(this.bookingData.bookingToDate).format('YYYY-MM-DD');
      this.saveReservationData(this.bookingData);
    }
  }

  checkGuestName() {

    this.api.checkGuestList(this.bookingData.guestName)
      .subscribe((res: any) => {
        // alert("res.."+res);
        if (res !== null) {
          alert("Guest Name Already Exist");
          const element = this.renderer.selectRootElement('#input1');
          element.focus()

        }
      }, err => {
        console.log(err);
      });



  }


}
