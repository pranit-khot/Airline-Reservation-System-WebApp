import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AircraftService } from '../aircraft.service';

@Component({
  selector: 'app-aircraft-add',
  templateUrl: './aircraft-add.component.html',
  styleUrls: ['./aircraft-add.component.css']
})
export class AircraftAddComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private modal: NgbActiveModal,
    private service:AircraftService 
  ) { }

  capacity = 0

  ngOnInit(): void {
  }

  onCancel() {
    this.modal.dismiss('cancel')
  }

  onAdd() { if (this.capacity.toString == null) {
      this.toastr.warning('please enter capacity')
    } else {
      this.service
        .addAircraft(this.capacity)
        .subscribe(response => {
          this.modal.dismiss('ok')
        })
    }
  }

}
