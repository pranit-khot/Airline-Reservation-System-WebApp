import { ScheduleEditComponent } from './../schedule-edit/schedule-edit.component';
import { ScheduleAddComponent } from './../schedule-add/schedule-add.component';
import { FlightScheduleService } from './../flight-schedule.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  schedules =[]

  constructor(
    private modalService: NgbModal,
    private service: FlightScheduleService
  ) { }

  ngOnInit(): void {
    this.loadSchedule()
  }

  loadSchedule() {
    this.service
      .getSchedule()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.schedules = response['data']
        } else {
          //this.toastr.error(response['error'])
        }
      })
  }

  onAdd() {
    const modalRef = this.modalService.open(ScheduleAddComponent)
    modalRef.result.finally(() => {
      this.loadSchedule()
    })
  }

  onDelete(schedule) {
    this.service
      .deleteSchedule(schedule['fls_id'])
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadSchedule
        } else {
          //this.toastr.error(response['error'])
        }
      })
  }

  onEdit(schedule) {
    const modalRef = this.modalService.open(ScheduleEditComponent)

    // get the edit comopnent's reference
    const component = modalRef.componentInstance as ScheduleEditComponent

    // pre-fill the title and description
    component.fls_id = schedule.fls_id
    component.arrival_time = schedule.arrival_time
    component.departure_time = schedule.departure_time
    component.flight_date =schedule.flight_date
    component.ac_id=schedule.ac_id
    component.airfare_id=schedule.airfare_id
    component.rt_id=schedule.rt_id

    console.log(schedule)
    
    modalRef.result.finally(() => {
      // reload the categories
      this.loadSchedule()
    })
  }
}
