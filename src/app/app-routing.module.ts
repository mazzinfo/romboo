import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
