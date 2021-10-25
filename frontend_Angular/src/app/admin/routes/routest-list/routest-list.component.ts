import { AddAirfareComponent } from './../add-airfare/add-airfare.component';
import { RoutesService } from './../routes.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { RouteAddComponent } from '../route-add/route-add.component';
import { RouteEditComponent } from '../route-edit/route-edit.component';
@Component({
  selector: 'app-routest-list',
  templateUrl: './routest-list.component.html',
  styleUrls: ['./routest-list.component.css']
})
export class RoutestListComponent implements OnInit {

  routes = []
  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private service: RoutesService
  ) { }

  ngOnInit(): void {
    this.loadRoutes()
  }

  // loadRoutes(){
  //   this.service
  //     .getRoutes()
  //     .subscribe(data => {
  //       console.log(data)
  //       this.routes=[]
  //       for(let key in data){
  //         this.routes.push(data[key]);
  //      }
  //     })
  // }
  loadRoutes() {
    this.service
      .getRoutes()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.routes = response['data']
        } else {
          this.toastr.error(response['error'])
        }
      })
  }
  onAdd() {
    const modalRef = this.modalService.open(RouteAddComponent)
    modalRef.result.finally(() => {
      // reload the categories
      this.loadRoutes
    })
  }

  onDelete(route) {
    this.service
      .deleteRoute(route['rt_id'])
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadRoutes()
        } else {
          this.toastr.error(response['error'])
        }
      })
  }

  onEdit(route) {
    const modalRef = this.modalService.open(RouteEditComponent)

    const component = modalRef.componentInstance as RouteEditComponent

    component.source = route.source
    component.destination = route.destination
    component.route_code = route.route_code
    component.rt_id = route.rt_id

    modalRef.result.finally(() => {
      this.loadRoutes
    })
  }

  onAddAirfare(route){

    const modalRef = this.modalService.open(AddAirfareComponent)

    const component = modalRef.componentInstance as AddAirfareComponent

    component.source = route.source
    component.destination = route.destination
    component.route_code = route.route_code
    component.rt_id = route.rt_id
    //component.fare = route.fare

    modalRef.result.finally(() => {
      this.loadRoutes
    })
  }

  // onAddAirfare() {
  //   const modalRef = this.modalService.open(AddAirfareComponent)
  //   modalRef.result.finally(() => {
  //     // reload the categories
  //     this.loadRoutes
  //   })
  // }


}
