import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class RestDataApiService {

  public currentRoomData: any = [];
  public guestureListData: any = [];

  public totalRoomData: any='';

  constructor(public api: RestApiService) { }


  async getCurrentRoomList() {
    
    this.api.getCurrentRoomStatus()
      .subscribe((res: any[]) => {
        this.currentRoomData = res;
      //  alert("res.."+res);
       
      }, err => {

        console.log(err);
       
        // this.toastService.presentToastWithMessage('Internet is not connected');

      });

  }


  async getGuestureDataList() {
    
    this.api.getGuestureList()
      .subscribe((res: any) => {
        this.guestureListData = res;
      //  alert("res.."+res);
       
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
       
        // this.toastService.presentToastWithMessage('Internet is not connected');

      });

  }
}
