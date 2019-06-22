import { RestDataApiService } from './../../shared/services/rest-data-api.service';
import { RestApiService } from './../../shared/services/rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedRoomType:any;
  selectedBlock:any;
  selectedFloor:any;
  selectedFilter:any;
  constructor(public restDataApiService: RestDataApiService) { 
this.selectedRoomType="all";
    
  }

  ngOnInit() {
    this.selectedRoomType="all";
    this.selectedBlock="all";
    this.selectedFloor="all";
    this.selectedFilter="all";
    this.restDataApiService.getCurrentRoomList();
    this.restDataApiService.getTotalRoomList();
  }

}
