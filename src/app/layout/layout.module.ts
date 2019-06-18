import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApptoolbarComponent } from './apptoolbar/apptoolbar.component';
import { AppheaderbarComponent } from './appheaderbar/appheaderbar.component';

@NgModule({
  declarations: [ApptoolbarComponent, AppheaderbarComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[ApptoolbarComponent,AppheaderbarComponent]
})
export class LayoutModule { }
