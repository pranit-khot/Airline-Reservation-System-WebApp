import { RoutesService } from './../routes.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-airfare',
  templateUrl: './add-airfare.component.html',
  styleUrls: ['./add-airfare.component.css']
})
export class AddAirfareComponent implements OnInit {

  source = ""
  destination = ""
  route_code = ""
  rt_id = 0
  fare = 0
  constructor(
    private service: RoutesService,
    private toastr: ToastrService,
    private modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.modal.dismiss('cancel')
  }
  
  onAdd(){
    this.service
    .addAirfare(this.rt_id,this.fare)
    .subscribe(response =>{
      this.modal.dismiss('ok')
    })
  }


}
