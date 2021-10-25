import { UserShowtransactionComponent } from './user-showtransaction/user-showtransaction.component';
import { UserAddAddressComponent } from './user-add-address/user-add-address.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TicketGenerateComponent } from './ticket-generate/ticket-generate.component';
import { TransactionComponent } from './transaction/transaction.component';

import { UserDetailsComponent } from './user-details/user-details.component';

import { ShowticketComponent } from './showticket/showticket.component';

@NgModule({
  declarations: [UserAddAddressComponent,UserShowtransactionComponent, UserProfileComponent, TicketGenerateComponent, TransactionComponent, UserDetailsComponent,ShowticketComponent],

  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
