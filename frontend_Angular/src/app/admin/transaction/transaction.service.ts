import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url = 'http://localhost:4000/transaction/showTransaction'

  constructor(private http: HttpClient) { }

  getTransaction() {

    return this.http.get(this.url)
  }
}
