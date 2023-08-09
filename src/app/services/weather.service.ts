
import { Injectable } from '@angular/core';
import { WeatherAppParams, weather } from '../core/models/weather-params-model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient
  ) { }
  private apiKey = '7a521b1ff6285fe7eabed9cc90b77148';

  getWetaher(model: WeatherAppParams): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${model.lat}&lon=${model.long}&appid=${this.apiKey}`;
    //const url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=6.9271&lon=79.8612&appid=7a521b1ff6285fe7eabed9cc90b77148'
    return this.http.get<any>(url);
  }



}