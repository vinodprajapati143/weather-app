import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpclient: HttpClient) {}

  getWeatherForecast(city: string) {
    const url = `${API_URL}/forecast?q=${city}&appid=${API_KEY}`;
    return this.httpclient.get(url);
  }

}
