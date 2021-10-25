import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{


  private url = 'http://localhost:7070/user'

  constructor(
    private router: Router,
    private http: HttpClient) { }
  
  signin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.http.post(this.url + "/login", body)
  }
  signup(firstName: string, lastName: string, phone: string, email: string, password: string,passportNumber:string) {
    const body = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password,
      passportNumber:passportNumber
    }

    return this.http.post(this.url + "/register", body)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   // check if user is already logged in
    if (!sessionStorage['user_name']) {
      // user is not yet logged in

      // force user to login
      this.router.navigate(['/auth/signin'])

      return false
    }

   // user is already logged in
    return true
  }
}
