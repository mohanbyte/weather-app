import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
private apiUrl= 'http://api.openweathermap.org/data/2.5/'
private apikey =''
constructor(private httpClient: HttpClient) {

   }
   getWeather(city: string ):Observable<Weather>{
    const options = new HttpParams().set('units', 'metric').set('q', city).set('appId', this.apikey);
    return this.httpClient.get<Weather>(this.apiUrl+ 'weather', {params: options})
   }
}
