import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = []

  constructor(
    private modalService: NgbModule,
    //private toaster: ToastrService,
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(){
    this.service
      .getUsers()
      .subscribe(data => {
        console.log(data)
        this.users=[]
        for(let key in data){
          this.users.push(data[key]);
       }
      })
  }

}
