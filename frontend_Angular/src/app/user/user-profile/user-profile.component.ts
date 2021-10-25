import { ToastrService } from 'ngx-toastr';
import { TicketGenerateComponent } from './../ticket-generate/ticket-generate.component';
import { Router } from '@angular/router';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

//child component
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  routers=[]
  flightSchedule=[]
  route1 = 0
  route_string = ''
  route_string1=''
  route2 = 0
  uname=''
  flightposno=0
  fare=''
  constructor(
    private userservice:UserServiceService,
    private modalService: NgbModal,
    private toaster:ToastrService
  ) { }
    

  onBook(id,flsId,i,fare,arrivalTime,departutetime) {
    //session mgt of flight schedule Id
    sessionStorage['flsid']=flsId
    this.flightposno=i;
    //add source and destination to session
    sessionStorage['source']=this.route_string
    sessionStorage['destination']=this.route_string1
    sessionStorage['fare']=fare
    sessionStorage['arrt']=arrivalTime
    sessionStorage['deptt']=departutetime

    console.log("id is "+id)
    const modalRef = this.modalService.open(TicketGenerateComponent,{size: 'lg'})
    
    const component = modalRef.componentInstance as TicketGenerateComponent

    component.afid=id;

    modalRef.result.finally(() => {
      
    })
  }
  ngOnInit(): void {
   {
     //taking user name from session
    this.uname=sessionStorage['user_name']
    
    //load all routes
    this.userservice.loadRoutes()
    .subscribe(data => {
      console.log(data)
     
      for(let key in data){
        this.routers.push(data[key]);
     }
     console.log(this.routers[0],this.routers[1])
   
    }, error => console.log(error))
  }
  }


  //calling this fun on change
onSubmit(){
  this.flightSchedule=[]
  console.log(this.route_string +" and "+this.route_string1)

  //session magt the src and destination
  sessionStorage['src-dest']="Source  -> "+this.route_string+"  Destination  -> "+this.route_string1
  this.userservice
      .loadFlightSchedule(this.route_string, this.route_string1)
      .subscribe(data => {
        console.log(data)
      for(let key in data){
        console.log("Key is  : "+key)
        this.flightSchedule.push(data[key]);
     }
     console.log("Testing flight pos : "+this.flightSchedule)
     sessionStorage['flightsc']=this.flightSchedule
     console.log("Execute after this : ");
     console.log(this.flightSchedule[0],this.flightSchedule[1])
    }, error => console.log(error))
  }     
}


