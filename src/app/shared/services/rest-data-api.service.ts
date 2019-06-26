import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class RestDataApiService {

  public currentRoomData: any = [];
  public guestureListData: any = [];
  public companyListData: any = [];
  public todayBookingListData: any = [];
  public bookingStatusListData: any = [];
  public roomTypeListData: any = [];

  
  

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


  async getGuestureDataList() {
    this.api.getGuestureList()
      .subscribe((res: any) => {
        this.guestureListData = res;
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
