import { DirtyComponent } from './../dirty/dirty.component';
import { CheckInComponent } from './../check-in/check-in.component';
import { CheckOutComponent } from './../check-out/check-out.component';
import { RestDataApiService } from './../../shared/services/rest-data-api.service';
import { RestApiService } from './../../shared/services/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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
  constructor(public restDataApiService: RestDataApiService,public dialog: MatDialog) { 
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

  checkoutGo(){
    const dialogRef = this.dialog.open(CheckOutComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  checkinGo(){
    const dialogRef = this.dialog.open(CheckInComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  dirtyGo(){
    const dialogConfig = new MatDialogConfig();

// Data Pass

  //   dialogConfig.data = {
  //     id: 1,
  //     title: 'Angular For Beginners'
  // };
 

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    

    
    const dialogRef = this.dialog.open(DirtyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
    
  }

}
