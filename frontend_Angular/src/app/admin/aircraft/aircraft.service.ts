import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  private url = 'http://localhost:7070/admin'
  private url1 = 'http://localhost:4000/aircraft'

  private url2 = 'http://localhost:4000/seat_utility'

  constructor(private http: HttpClient) { }

  // getAircrafts() {
  //   return this.http.get(this.url1 + "/showAircraft")
  // }

  getAircrafts() {
    return this.http.get(this.url1 + "/showAircraft")
  }

  addAircraft(capacity: number) {

    const body = {
      capacity: capacity
    }

    return this.http.post(this.url + "/addAircraft", body)
  }

  deleteAircraft(acId: number) {
    return this.http.delete(this.url1 + "/" + acId)
  }

  editAircraft(acid: number, capacity: number) {

    const body = {
      capacity: capacity
    }

    return this.http.put(this.url1 + "/" + acid, body)
  }

  emptySeats(acid:number){

    const body = {
    }
    return this.http.put(this.url2 + "/" + acid, body)
  }
}
