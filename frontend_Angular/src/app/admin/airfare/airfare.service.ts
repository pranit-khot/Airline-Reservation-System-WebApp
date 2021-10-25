import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AirfareService {
  private url = 'http://localhost:4000/airfare/showAirfare'

  constructor(private http: HttpClient) { }

  getAirfare() {
    return this.http.get(this.url)
  }
}
