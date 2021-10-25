import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/admin/user/user-list/user.service';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-add-address',
  templateUrl: './user-add-address.component.html',
  styleUrls: ['./user-add-address.component.css']
})
export class UserAddAddressComponent implements OnInit {

  street=''
  state_name=''
  country=''
  //country=''
  constructor(
    private router: Router,
    private service:UserServiceService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onAddaddress()
  {
    if (this.street.length == 0) 
    {
      this.toaster.warning('please enter city code')
    }
    else if (this.state_name.length == 0) {
      this.toaster.warning('please  enter state name')
    }
    else if (this.country.length == 0) {
      this.toaster.warning('please enter country')
    }
    else{
      this.service
        .addAddress(this.street,this.state_name,this.country,sessionStorage["user_id"])
        .subscribe(response => 
          {
          console.log(response)
          this.toaster.success('Address added Successfully')
          this.router.navigate(['/base/user/user-profile/'])
        })
      }
}
}
