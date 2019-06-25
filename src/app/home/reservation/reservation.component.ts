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


  constructor(public restDataApiService:RestDataApiService) {

    
  
   }

  ngOnInit() {

    this.firstName = 'Alec';
    this.lastName = 'Thompson';
    this.restDataApiService.getGuestureDataList();
  }

}
