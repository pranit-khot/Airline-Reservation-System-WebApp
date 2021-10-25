import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShowticketService {

  private url = 'http://localhost:7070/transaction'
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  updateTransaction(afid:number,uid:number){
   
    return this.http.get(this.url+"/book"+"/"+uid+"/"+afid);
  }

}
