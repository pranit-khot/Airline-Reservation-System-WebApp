import { TransactionService } from './transaction.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(
    private transacservice:TransactionService,
    private toaster: ToastrService,
    private modalService: NgbModal,
    private router:Router
  ) { }

 username=''
 acno=0;
 cvv=0;
  ngOnInit(): void {
    this.username=sessionStorage['user_name']
  }

  verifyBankDetails(){
    this.transacservice.verifyBank(this.acno,this.cvv)
    .subscribe(data => {
      if(data!=null)
        {
          console.log(data)
          this.toaster.success("Transaction Success")
          this.router.navigate(['/base/user/showticket'])

        }
      else
      this.toaster.error("Transaction Error ");
    },error => console.log(error))
  }
}
