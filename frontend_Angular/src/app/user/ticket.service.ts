import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  private url = 'http://localhost:7070/seat'
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  loadSeats(afid:number){
    return this.http.get(this.url+"/loadseat"+"/"+afid);
  }

  bookSeat(seatId:number,uid:number,afid:number){
    return this.http.get(this.url+"/reserveseat"+"/"+seatId+"/"+uid+"/"+afid);
  }


}
