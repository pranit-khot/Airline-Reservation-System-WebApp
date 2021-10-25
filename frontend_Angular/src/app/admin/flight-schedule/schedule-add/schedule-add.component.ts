import { FlightScheduleService } from './../flight-schedule.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.css']
})

export class ScheduleAddComponent implements OnInit {

  arrival_time = ''
  departure_time =''
  flight_date =''
  ac_id =1
  airfare_id =1
  rt_id =1

  schedules=[]

  constructor( 
    private modal: NgbActiveModal,
    private service: FlightScheduleService
    ) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.service
        .addSchedule(this.arrival_time,this.departure_time,this.flight_date,this.ac_id,this.airfare_id,this.rt_id)
        .subscribe(response => {
          this.modal.dismiss('ok')
        })
  }

  onCancel() {
    this.modal.dismiss('cancel')
  }
}
