import { RestDataApiService } from './../../shared/services/rest-data-api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.scss']
})
export class SettlementComponent implements OnInit {

  settleName:string;
  settleAmount:number;
  advanceAmount:number;
  totalAmount:number=0;
  saveBlock=false;
  public settleListDatas: any = [];

  private fieldArray: Array<any> = [];
  private newAttribute: any = {


  };

  amoutChanged(){

    this.totalAmount=0;
    
for(var i=0 ;i <this.restDataApiService. settleListData.length;i++){
    this.totalAmount =this.totalAmount+ this.restDataApiService. settleListData[i].amount1;

}  


if(this.advanceAmount== this.totalAmount){
  this.saveBlock=true;
  
}else{
  this.saveBlock=false;
}
  }

  constructor(public restDataApiService: RestDataApiService,@Inject(MAT_DIALOG_DATA) public data: any,
  
  public dialogRef: MatDialogConfig<SettlementComponent>) { 

this.advanceAmount=data.amount;

  }

  

  ngOnInit() {
    this.restDataApiService.getSettleList();
    
  }

}
