import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private url = 'http://localhost:7070/bank'
  private url1 = 'http://localhost:7070/user'
  
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  verifyBank(acno:number,cvv:number){
    console.log("The verify bank in trasaction service")
    const body={
      accNo:acno,
      cvv:cvv,
      uid:sessionStorage['user_id']
    }
    return this.http.post(this.url+"/verify"+"/"+sessionStorage['flsid'],body)
  }

  showTransac(){
    return this.http.get(this.url1+"/show"+"/"+sessionStorage['user_id'])
  }
}
