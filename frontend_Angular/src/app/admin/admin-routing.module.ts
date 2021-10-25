import { AddAirfareComponent } from './routes/add-airfare/add-airfare.component';

import { AirfareListComponent } from './airfare/airfare-list/airfare-list.component';

import { AircraftAddComponent } from './aircraft/aircraft-add/aircraft-add.component';
import { AircraftEditComponent } from './aircraft/aircraft-edit/aircraft-edit.component';

import { ScheduleListComponent } from './flight-schedule/schedule-list/schedule-list.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { AircraftListComponent } from './aircraft/aircraft-list/aircraft-list.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { RoutestListComponent } from './routes/routest-list/routest-list.component';
import { RouteAddComponent } from './routes/route-add/route-add.component';
import { RouteEditComponent } from './routes/route-edit/route-edit.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';

const routes: Routes = [
  {path:'admin-login', component:AdminLoginComponent},
  {path:'admin-profile', component:AdminProfileComponent},
  {path:'user/user-list', component:UserListComponent},
  {path:'aircraft/aircraft-list', component:AircraftListComponent},
  {path:'flights/flights-list', component:FlightListComponent},
  {path:'routes/routes-list', component:RoutestListComponent},

  {path:'flight-schedule/schedule-list', component:ScheduleListComponent},
  {path: 'airfare/airfare-list', component:AirfareListComponent},

  {path:'routes/routes-add', component:RouteAddComponent},
  {path:'routes/routes-edit', component:RouteEditComponent},
  {path:'flight-schedule/schedule-list', component:ScheduleListComponent},
  {path:'aircraft/aircraft-edit', component:AircraftEditComponent},
  {path:'aircraft/aircraft-add', component:AircraftAddComponent},
  {path:'transaction/transaction-list', component:TransactionListComponent},
  {path:'routes/add-airfare', component:AddAirfareComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
