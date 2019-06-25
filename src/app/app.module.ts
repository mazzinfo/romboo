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
import { MatDialogModule } from '@angular/material/dialog';


import { DirtyComponent } from './home/dirty/dirty.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './home/reservation/reservation.component';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import {MOMENT_DATE_FORMATS, MomentDateAdapter } from 'src/environments/environment';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

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
    HttpClientModule,
    NgxMaterialTimepickerModule,
    LayoutModule,
    LoginFormModule,
    HomeModule
  ],
  entryComponents: [CheckInComponent,CheckOutComponent,DirtyComponent,ReservationComponent],
  providers: [{provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
