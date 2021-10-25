import { AircraftService } from './../aircraft.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-aircraft-edit',
  templateUrl: './aircraft-edit.component.html',
  styleUrls: ['./aircraft-edit.component.css']
})
export class AircraftEditComponent implements OnInit {

  ac_id = 0
  capacity = 0

  constructor(
    private toastr: ToastrService,
    private modal: NgbActiveModal,
    private service: AircraftService
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.modal.dismiss('cancel')
  }

  onUpdate() {
    if (this.ac_id.toString == null) {
      this.toastr.warning('please enter Aircraft Id')
    } else if (this.capacity.toString == null) {
      this.toastr.warning('please enter capacity')
    } else {
      this.service
        .editAircraft(this.ac_id, this.capacity)
        .subscribe(response => {
          this.modal.dismiss('ok')
        })
    }
  }
}
