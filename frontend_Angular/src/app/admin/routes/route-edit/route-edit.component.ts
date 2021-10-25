import { RoutesService } from './../routes.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-edit',
  templateUrl: './route-edit.component.html',
  styleUrls: ['./route-edit.component.css']
})
export class RouteEditComponent implements OnInit {

  source = ''
  destination = ''
  route_code = ''
  rt_id = 0
  constructor(
    private toastr: ToastrService,
    private modal: NgbActiveModal,
    private service : RoutesService
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.modal.dismiss('cancel')
  }

  onUpdate() {
    if (this.source.length == 0) {
      this.toastr.warning('please enter source')
    } else if (this.destination.length == 0) {
      this.toastr.warning('please enter destination')
    } else {
      this.service
        .editRoute(this.rt_id, this.source, this.destination, this.route_code)
        .subscribe(response => {
          this.modal.dismiss('ok')
        })
    }
  }
}
