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
    HttpClientModule,
    LayoutModule,
    LoginFormModule,
    HomeModule
  ],
  entryComponents: [CheckInComponent,CheckOutComponent,DirtyComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
