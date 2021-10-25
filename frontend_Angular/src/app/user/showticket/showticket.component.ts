import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ShowticketService } from './showticket.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-showticket',
  templateUrl: './showticket.component.html',
  styleUrls: ['./showticket.component.css']
})
export class ShowticketComponent implements OnInit {

  username=''
  flightpos=[]
  source=''
  destination=''
  fare=0
  seatno=0
  arrt=''
  deptt=''
  constructor(
      private showticketservice:ShowticketService,
      private router:Router,
      private toaster:ToastrService
  ) { }

  ngOnInit(): void {
    this.username=sessionStorage['user_name']
    this.flightpos.push(sessionStorage['flightsc']);
    console.log("flight posss : "+this.flightpos)
    this.source=sessionStorage['source']
    this.destination=sessionStorage['destination']
    this.fare=sessionStorage['fare']
    this.arrt=sessionStorage['arrt']
    this.deptt=sessionStorage['deptt']
    this.seatno=sessionStorage['seat_number']
    console.log("Time  : "+sessionStorage['arrt'])

   this.updateTransacrtion();
  }
  updateTransacrtion(){
    this.showticketservice.updateTransaction(sessionStorage['flsid'],sessionStorage['user_id'])
    .subscribe(data => {
      if(data!=null)
      {
          this.toaster.success('Thank You!!')
        // this.router.navigate(['/home/user/user-profile'])
      }
      else{
        this.toaster.error('Error While Submit Transaction')
      }
    }, error => console.log(error))
  }

}
