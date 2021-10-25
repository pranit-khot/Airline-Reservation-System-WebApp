import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = 'http://localhost:7070/admin'
  private url1 = 'http://localhost:7070/user'

  constructor(
    private router:Router,
    private http:HttpClient
  ) { }

  loadRoutes(){
    return this.http.get(this.url+"/showRoutes");
  }

  loadFlightSchedule(source:string,destination:string){
    return this.http.get(this.url+'/flightScedule'+"/"+source+"/"+destination);
  }


  addAddress(street:string,stateName:string,country:String,id: number){
    const body = {
      street:street,
      state:{
        stateName:stateName,
        country:country
      }
    }
    return this.http.put(this.url1+"/address"+"/"+id,body)
  }

  loaduser(){
   
    return this.http.get(this.url1+"/showprofile"+"/"+sessionStorage['user_id'])

  }

  

}
