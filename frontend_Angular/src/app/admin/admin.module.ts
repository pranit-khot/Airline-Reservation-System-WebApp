import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AircraftListComponent } from './aircraft/aircraft-list/aircraft-list.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { RoutestListComponent } from './routes/routest-list/routest-list.component';
import { ScheduleListComponent } from './flight-schedule/schedule-list/schedule-list.component';
import { AircraftAddComponent } from './aircraft/aircraft-add/aircraft-add.component';
import { AircraftEditComponent } from './aircraft/aircraft-edit/aircraft-edit.component';

import { AirfareListComponent } from './airfare/airfare-list/airfare-list.component';

import { RouteAddComponent } from './routes/route-add/route-add.component';
import { RouteEditComponent } from './routes/route-edit/route-edit.component';
import { ScheduleAddComponent } from './flight-schedule/schedule-add/schedule-add.component';
import { ScheduleEditComponent } from './flight-schedule/schedule-edit/schedule-edit.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { AddAirfareComponent } from './routes/add-airfare/add-airfare.component';



@NgModule({
  declarations: [
    AdminProfileComponent, 
    AdminLoginComponent,
    UserListComponent, 
    AircraftListComponent, 
    FlightListComponent, 
    RoutestListComponent, 
    ScheduleListComponent, 
    AircraftAddComponent, 
    AircraftEditComponent, 
    AirfareListComponent,
    RouteAddComponent, 
    RouteEditComponent, 
    ScheduleAddComponent, 
    ScheduleEditComponent, 
    TransactionListComponent, 
    AddAirfareComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
