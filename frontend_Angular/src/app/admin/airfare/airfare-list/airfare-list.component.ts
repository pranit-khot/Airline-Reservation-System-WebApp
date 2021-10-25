import { AirfareService } from './../airfare.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-airfare-list',
  templateUrl: './airfare-list.component.html',
  styleUrls: ['./airfare-list.component.css']
})
export class AirfareListComponent implements OnInit {

  airfares =[]

  constructor(
    private modalService: NgbModal,
    private service: AirfareService
  ) { }

  ngOnInit(): void {
    this.loadAirfare()
  }

  loadAirfare() {
    this.service
      .getAirfare()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.airfares = response['data']
        } else {
          //this.toastr.error(response['error'])
        }
      })
  }

}
