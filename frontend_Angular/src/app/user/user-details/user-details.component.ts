import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id:any
  fname=''
  lname=''
  email=''
  passport=''
  phone=''
  city=''
  details=[]
  constructor(
    private userservice:UserServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userservice
      .loaduser()
      .subscribe(data => {
        console.log(data)
      for(let key in data){
        this.details.push(data[key]);
       
     }
      //this.details=data
      this.id=this.details[0]
      this.fname=this.details[1]
      this.lname=this.details[2]
      this.email=this.details[3]
      this.passport=this.details[6]
      this.phone=this.details[5]
  
     console.log("User Details:"+this.details)


    }, error => console.log(error))
  }
 
}
