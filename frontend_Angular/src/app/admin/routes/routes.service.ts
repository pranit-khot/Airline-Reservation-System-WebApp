import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  //private url = "http://localhost:7070/admin"
  private url1 = 'http://localhost:4000/route'
  private url2 = 'http://localhost:4000/airfare'


  constructor(private http: HttpClient) { }

  // getRoutes() {
  //   // send the token along with the request
  //   // const httpOptions = {
  //   //   headers: new HttpHeaders({
  //   //     token: sessionStorage['token']
  //   //   })
  //   // }

  //   //return this.http.get(this.url, httpOptions)
  //   return this.http.get(this.url + "/showRoutes")
  // }

  getRoutes() {
    return this.http.get(this.url1 + "/showRoute")
  }

  addRoutes(source: string, destination: string, routeCode: string) {

    const body = {
      source: source,
      destination: destination,
      routeCode: routeCode
    }

    return this.http.post(this.url1 + "/addRoutes", body)
  }


  deleteRoute(rt_id: number) {
    return this.http.delete(this.url1 + "/" + rt_id)
  }

  
  editRoute(rtid: number, source: string, destination: string, route_code: string) {

    const body = {
      source: source,
      destination: destination,
      routeCode:route_code
    }

    return this.http.put(this.url1 + "/" + rtid, body)
  }

  addAirfare(rt_id:number, fare:number){
    console.log("airfare service called")
    console.log(rt_id, fare)
    const body = {
      fare: fare
    }
    return this.http.post(this.url2 + "/" + rt_id, body)
  }
}
