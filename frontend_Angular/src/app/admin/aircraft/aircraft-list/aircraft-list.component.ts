import { AircraftEditComponent } from './../aircraft-edit/aircraft-edit.component';
import { AircraftService } from './../aircraft.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AircraftAddComponent } from '../aircraft-add/aircraft-add.component';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {

  aircrafts=[]

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private service: AircraftService
  ) { }

  ngOnInit(): void {
    this.loadAircrafts()
  }

  // loadAircrafts(){
  //   this.service
  //     .getAircrafts()
  //     .subscribe(data => {
  //       console.log(data)
  //       this.aircrafts=[]
  //       for(let key in data){
  //         this.aircrafts.push(data[key]);
  //      }
  //     })
  // }

  loadAircrafts() {
    this.service
      .getAircrafts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.aircrafts = response['data']
        } else {
          this.toastr.error(response['error'])
        }
      })
  }

  onAdd() {
    const modalRef = this.modalService.open(AircraftAddComponent)
    modalRef.result.finally(() => {
      this.loadAircrafts()
    })
  }

  onDelete(aircraft) {
    this.service
      .deleteAircraft(aircraft['ac_id'])
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadAircrafts
        } else {
          this.toastr.error(response['error'])
        }
      })
  }

  onEdit(aircraft) {
    const modalRef = this.modalService.open(AircraftEditComponent)

    // get the edit comopnent's reference
    const component = modalRef.componentInstance as AircraftEditComponent

    // pre-fill the title and description
    component.capacity = aircraft.capacity
    component.ac_id = aircraft.ac_id

    modalRef.result.finally(() => {
      // reload the categories
      this.loadAircrafts()
    })
  }

  onEmpty(aircraft){
    this.service
    .emptySeats(aircraft['ac_id'])
    .subscribe(response => {
      if (response['status'] == 'success') {
        this.loadAircrafts
      } else {
        this.toastr.error(response['error'])
      }
    })
  }
}
