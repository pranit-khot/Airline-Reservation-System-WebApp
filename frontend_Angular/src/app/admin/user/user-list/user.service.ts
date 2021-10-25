import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:7070/admin'

  constructor(private http: HttpClient) { }

  getUsers() {

    // send the token along with the request
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     token: sessionStorage['token']
    //   })
    // }

    //return this.http.get(this.url, httpOptions)
    return this.http.get(this.url + "/showUser")
  }
}
