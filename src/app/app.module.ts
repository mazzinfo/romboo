import { BookingListComponent } from './home/booking-list/booking-list.component';
import { CheckOutComponent } from './home/check-out/check-out.component';
import { CheckInComponent } from './home/check-in/check-in.component';
import { LoginFormModule } from './login-form/login-form.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';


import { DirtyComponent } from './home/dirty/dirty.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './home/reservation/reservation.component';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';

import { AgGridModule } from 'ag-grid-angular';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MomentDateAdapter, MOMENT_DATE_FORMATS } from 'src/app/shared/Adapter/MomentDateAdapter'
import { SettlementComponent } from './home/settlement/settlement.component';
import { ErrorDialogComponent } from './home/error-dialog/error-dialog.component';
import { PipesModule } from './pipes/pipes.module';
import { SearchGuestPipe } from './pipes/search-guest.pipe';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule, 
    MatDialogModule,
    FormsModule,
    AngularDateTimePickerModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    NgxMaterialTimepickerModule,
    LayoutModule,
    LoginFormModule,
    HomeModule,
    PipesModule,
  ],
  entryComponents: [CheckInComponent,CheckOutComponent,DirtyComponent,ReservationComponent,SettlementComponent,ErrorDialogComponent,BookingListComponent],
  providers: [{provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS},MomentDateAdapter,MatDialogConfig,
    {provide: DateAdapter, useClass: MomentDateAdapter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
