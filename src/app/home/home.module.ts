import { MaterialModule } from './../material/material.module';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { DirtyComponent } from './dirty/dirty.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [ DashboardComponent, CheckInComponent, CheckOutComponent, DirtyComponent, ReservationComponent],
  imports: [
    CommonModule,LayoutModule,MaterialModule
  ],
  exports:[CheckInComponent,CheckOutComponent,DirtyComponent,ReservationComponent,ReservationComponent]
})
export class HomeModule { }
