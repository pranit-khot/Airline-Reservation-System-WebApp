import { RoutesService } from './../routes.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-route-add',
  templateUrl: './route-add.component.html',
  styleUrls: ['./route-add.component.css']
})
export class RouteAddComponent implements OnInit {


  source = ''
  destination = ''
  route_code = ''

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

  onAdd() {
    if (this.source.length == 0) {
      this.toastr.warning('please enter source')
    } else if (this.destination.length == 0) {
      this.toastr.warning('please enter destination')
    } else if(this.route_code.length == 0){
      this.toastr.warning('please enter route code')
    }else {
      this.service
        .addRoutes(this.source, this.destination, this.route_code)
        .subscribe(response => {
          this.modal.dismiss('ok')
        })
    }
  }

}
