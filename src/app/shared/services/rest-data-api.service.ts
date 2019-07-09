import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class RestDataApiService {

  public currentRoomData: any = [];
  public guestureListData: any = [];
  public guestListData: any = [];
  public companyListData: any = [];
  public todayBookingListData: any = [];
  public bookingListData: any = [];
  public bookingGuestListData: any = [];
  public bookingStatusListData: any = [];
  public roomTypeListData: any = [];
  public settleListData: any = [];

  
  

  public totalRoomData: any='';

  constructor(public api: RestApiService) { }


  async getCurrentRoomList() {
    this.api.getCurrentRoomStatus()
      .subscribe((res: any[]) => {
        this.currentRoomData = res;
      }, err => {
        console.log(err);
      });
  }

  async getBookingList() {
    this.api.getBookingList()
      .subscribe((res: any[]) => {
        this.bookingListData = res;
      }, err => {
        console.log(err);
      });
  }


  async getBookingGuestList(guestId) {
    this.api.getBookingListByGuestId(guestId)
      .subscribe((res: any[]) => {
        if(res!=null){
        this.bookingGuestListData = res;
        }else{
          this.bookingGuestListData =[];
        }
      }, err => {
        console.log(err);
      });
  }


 



  async getSettleList() {
    this.api.getSettleList()
      .subscribe((res: any[]) => {
        this.settleListData = res;
      }, err => {
        console.log(err);
      });
  }


  async getGuestureDataList() {
    this.api.getGuestureList()
      .subscribe((res: any) => {
        this.guestureListData = res;
      }, err => {
        console.log(err);
      });
  }

  

  async getGuestDataList() {
    this.api.getGuestList()
      .subscribe((res: any) => {
        this.guestListData = res;
      }, err => {
        console.log(err);
      });
  }

  async getCompanyDataList() {
    this.api.getCompanyList()
      .subscribe((res: any) => {
        this.companyListData = res;
      }, err => {
        console.log(err);
      });
  }

  async getTodayBookingDataList() {
    this.api.getTodayBookingList()
      .subscribe((res: any) => {
        this.todayBookingListData = res;
      }, err => {
        console.log(err);
      });
  }




  async getBookingStatusDataList() {
    this.api.getBookingStatusList()
      .subscribe((res: any) => {
        this.bookingStatusListData = res;
      }, err => {
        console.log(err);
      });
  }


  async getRoomTypeDataList() {
    this.api.getRoomTypeList()
      .subscribe((res: any) => {
        this.roomTypeListData = res;
      }, err => {
        console.log(err);
      });
  }

  async getTotalRoomList() {    
    this.api.getTotalRoomStatus()
      .subscribe((res: any) => {
        this.totalRoomData = res;
      //  alert("res.."+res);
      }, err => {
        console.log(err);
        // this.toastService.presentToastWithMessage('Internet is not connected')
      });
  }
}
