import { AuthService } from './../auth/auth.service';
import { AdminServiceService } from './../admin/admin-service.service';
import { ShowticketComponent } from './showticket/showticket.component';
import { TransactionComponent } from './transaction/transaction.component';

import { UserServiceService } from './user-service.service';
import { UserShowtransactionComponent } from './user-showtransaction/user-showtransaction.component';
import { UserAddAddressComponent } from './user-add-address/user-add-address.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  
  {path:'forgot-password',component:UserForgotPasswordComponent},
  {path:'add-address',component:UserAddAddressComponent},
  {path:'show-transaction',component:UserShowtransactionComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'user-details',component:UserDetailsComponent},
  {path:'showticket',component:ShowticketComponent}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
