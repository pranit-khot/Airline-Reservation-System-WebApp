import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TicketService } from './../ticket.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-generate',
  templateUrl: './ticket-generate.component.html',
  styleUrls: ['./ticket-generate.component.css']
})
export class TicketGenerateComponent implements OnInit {

  afid :number
  seats=[]
  seatL=5;
  reserve=[]
  seatnumber:number
  userId:number
  constructor(
    private ticeketService:TicketService,
    private toaster: ToastrService,
    private modalService: NgbModal,
    private router:Router
  ) { }

  ngOnInit(): void {
  
    this.onSeatsLoad(this.afid)
  }

  onSeatsLoad(afid){
    this.ticeketService.loadSeats(afid)
    .subscribe(data => {
      console.log(data)
      for(let key in data){
        this.seats.push(data[key]);
     }
     console.log(this.seats[0],this.seats[1])
    }, error => console.log(error))
  }
  
  onSubmit(seatid){
    // this.reserve.push(seatid)
    //getting seat number 

    this.seatnumber=seatid
    console.log("Here is seatId : "+seatid)
  }
  BookSeat(){
    //session mgt of seatNumber
    sessionStorage['seat_number']=this.seatnumber;
    
    console.log('session storage : '+sessionStorage['user_id'])
    console.log('session name : '+sessionStorage['user_name'])
    this.modalService.dismissAll()
    this.userId=sessionStorage['user_id']
    this.ticeketService.bookSeat(this.seatnumber,this.userId,this.afid)
    .subscribe(data => {
      if(data!=null)
        {
          console.log(data)
          this.router.navigate(['/base/user/transaction'])
        }
      else
      this.toaster.error("Booking Error");
    },error => console.log(error))
  }
}
