import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FlightScheduleService {

  private url = 'http://localhost:4000/schedule'
  private url1 = 'http://localhost:7070/user'

  constructor(private http: HttpClient) { }

  getSchedule() {

    return this.http.get(this.url + '/showSchedule')
  }

  addSchedule(arrival_time: string, departure_time: string, flight_date: string, ac_id:number, airfare_id:number, rt_id:number){

    const body = {
      arrival_time: arrival_time,
      departure_time : departure_time,
      flight_date: flight_date,
      ac_id:ac_id,
      airfare_id: airfare_id,
      rt_id:rt_id
    }

    return this.http.post(this.url + "/", body)
  }

  deleteSchedule(fls_id: number) {
    return this.http.delete(this.url + "/" + fls_id)
  }

  editSchedule(fls_id: number,arrival_time: string, departure_time: string, flight_date: string, ac_id:number, airfare_id:number, rt_id:number){

    const body = {
      arrival_time: arrival_time,
      departure_time : departure_time,
      flight_date: flight_date,
      ac_id:ac_id,
      airfare_id: airfare_id,
      rt_id:rt_id
    }
    console.log("IN put edit schedule")
    return this.http.put(this.url + "/"+ fls_id, body)
  }
}
