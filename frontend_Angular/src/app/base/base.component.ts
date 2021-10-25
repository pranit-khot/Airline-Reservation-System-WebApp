import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onLogout() {
   
    // clear the session storage
    sessionStorage.removeItem('user_name')
    this.router.navigate(['/auth/signin'])
   }


}
