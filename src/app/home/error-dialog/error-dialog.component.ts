import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  errorMsg:string;

  constructor(@Inject(MAT_DIALOG_DATA) public errorData: any) { 
    this.errorMsg=errorData.error;
  }

  ngOnInit() {
  }

}
