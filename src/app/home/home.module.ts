import { MaterialModule } from './../material/material.module';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ DashboardComponent],
  imports: [
    CommonModule,LayoutModule,MaterialModule
  ]
})
export class HomeModule { }
