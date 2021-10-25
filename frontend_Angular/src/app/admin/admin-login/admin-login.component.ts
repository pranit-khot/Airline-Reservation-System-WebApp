import { AdminServiceService } from './../admin-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email = ''
  password = ''
  admin = []
  constructor(
    private router: Router,
    private service: AdminServiceService
   ) { }


  ngOnInit(): void {
  }

  onLogin() {
    if (this.email.length == 0) {
      //this.toaster.warning('please enter email name')
    } else if (this.password.length == 0) {
     // this.toaster.warning('please enter password')
    } else {
      this.service
        .login(this.email, this.password)
        .subscribe(data => {
          if(data != null){
          console.log(data)
          this.admin=[]
          for(let key in data){
            this.admin.push(data[key]);
         }
         console.log(this.admin[0],this.admin[1])
         sessionStorage['admin_name'] = this.admin[1] + ' ' + this.admin[2]
         this.router.navigate(['/admin/admin-profile'])}
         else{
           alert("wrong credentials");
         }
        }, error => console.log(error))
    }
  }



}
