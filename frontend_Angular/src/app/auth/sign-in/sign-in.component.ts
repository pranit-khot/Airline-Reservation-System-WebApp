import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  
  email = ''
  password = ''
  user=[]
  constructor(
    //private toastr: ToastrService,
    private router: Router,
    private service: AuthService,
    private toaster: ToastrService
   ) { }

  ngOnInit(): void {
    // this.user=new User();
  }

  onSignin() {
    if (this.email.length == 0) {
      this.toaster.warning('Please Enter Email')
    } else if (this.password.length == 0) {
      this.toaster.warning('Please Enter Password')
    } else {
      this.service
        .signin(this.email, this.password)
        .subscribe(data => {
          if(data!=null)
          {
            console.log(data)
            this.user=[]
            for(let key in data){
              this.user.push(data[key]);
            }
         console.log(this.user[0],this.user[1])
         sessionStorage['user_name'] = this.user[1] + ' ' + this.user[2]
         sessionStorage['user_id'] = this.user[0]
         console.log("session Id : "+sessionStorage['user_id'])
         this.toaster.success("Welcome "+this.user[1]);
        //  this.router.navigate(['/home/user/user-profile'])
        // this.router.navigate(['/home'])
        this.router.navigate(['/base/home'])
          }
          else{
          this.toaster.error('Please Enter Correct Email and Password')
          }
        }, error =>console.log(error))
    }

}

}
