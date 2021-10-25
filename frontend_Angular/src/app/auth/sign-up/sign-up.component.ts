import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  password = ''
  confirmPassword = ''
  passport_number=''
  constructor(
    private router: Router,
    private service: AuthService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSignup() {
    if (this.firstName.length == 0) {
      this.toaster.warning('please enter first name')
    } else if (this.lastName.length == 0) {
      this.toaster.warning('please enter last name')
    } else if (this.email.length == 0) {
      this.toaster.warning('please enter email name')
    } else if (this.phone.length == 0) {
      this.toaster.warning('please enter phone name')
    } else if (this.password.length == 0) {
      this.toaster.warning('please enter password')
    } else if (this.confirmPassword.length == 0) {
      this.toaster.warning('please confirm password')
    } else if (this.password != this.confirmPassword) {
      this.toaster.warning('password does match')
    } else if (this.passport_number.length == 0) {
      this.toaster.warning('please enter passport number')
    } else {
      this.service
        .signup(this.firstName, this.lastName, this.phone, this.email, this.password,this.passport_number)
        .subscribe(data => {
          console.log("data of data"+data)
          this.toaster.success('Registered Successfully')

          console.log(data)
         this.router.navigate(['/auth/signin/'])
        }, error =>console.log(error))
    }
  }

}
