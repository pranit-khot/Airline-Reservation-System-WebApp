import { Component, OnInit } from '@angular/core';
import { FlightScheduleService } from '../flight-schedule.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {

  
  fls_id = 0
  arrival_time = ''
  departure_time =''
  flight_date =''
  ac_id = 0
  airfare_id = 0
  rt_id = 0

  constructor(
    private modal: NgbActiveModal ,
    private service : FlightScheduleService) { }

  ngOnInit(): void {
  }

  onUpdate(){
    this.service
        .editSchedule(this.fls_id, this.arrival_time, this.departure_time, this.flight_date,this.ac_id,this.airfare_id,this.rt_id)
        .subscribe(response => {
          this.modal.dismiss('ok')
        })
  }
  onCancel() {
    this.modal.dismiss('cancel')
  }

}
