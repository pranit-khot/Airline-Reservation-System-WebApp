import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
//import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private url = 'http://localhost:7070/admin'
  constructor(
    private router: Router,
    private http: HttpClient) { }

    login(email: string, password: string) {
      const body = {
        email: email,
        password: password
      }
  
      return this.http.post(this.url + "/login", body)
    }
    
}
