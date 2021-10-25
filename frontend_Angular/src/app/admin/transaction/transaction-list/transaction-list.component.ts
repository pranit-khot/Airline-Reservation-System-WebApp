import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions = []
  constructor(
    private modalService: NgbModal,
    private service: TransactionService) { }

  ngOnInit(): void {
    this.loadTransaction()
  }

  loadTransaction() {
    this.service
      .getTransaction()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.transactions = response['data']
        } else {
          //this.toastr.error(response['error'])
        }
      })
  }
}
