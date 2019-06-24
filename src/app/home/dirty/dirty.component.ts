import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dirty',
  templateUrl: './dirty.component.html',
  styleUrls: ['./dirty.component.scss']
})
export class DirtyComponent implements OnInit {

  form: FormGroup;
  description:string;

  constructor( private fb: FormBuilder,
    private dialogRef: MatDialogRef<DirtyComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      // this.description = data.description;
    }

  ngOnInit() {

   


  }


  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}
}
