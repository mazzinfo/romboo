import { LoginComponent } from './login-form/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ReservationComponent } from './home/reservation/reservation.component';

const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', pathMatch: 'full', component: LoginComponent}, 
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent} ,
  { path: 'reservation', pathMatch: 'full', component: ReservationComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
