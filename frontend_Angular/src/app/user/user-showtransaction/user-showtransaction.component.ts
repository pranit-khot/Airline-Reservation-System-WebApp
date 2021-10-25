import { TransactionService } from './../transaction/transaction.service';
import { TransactionComponent } from './../transaction/transaction.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-showtransaction',
  templateUrl: './user-showtransaction.component.html',
  styleUrls: ['./user-showtransaction.component.css']
})
export class UserShowtransactionComponent implements OnInit {

  transac=[]
  constructor(
    private route:Router,
    private toaster:ToastrService,
    private transaction:TransactionService
  ) { }

  ngOnInit(): void {
    this.showTransaction();
  }
  showTransaction(){

    this.transaction.showTransac().subscribe(data => {
        if(data!=null)
          {
            console.log(data)
             for(let key in data){
            this.transac.push(data[key]);
            }
            this.toaster.success("Transaction History")
          }
        else
        this.toaster.error("Some Error while loading Transaction ");
      },error => console.log(error))
    }
  }
