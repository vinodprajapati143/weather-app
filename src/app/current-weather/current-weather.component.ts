
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface WeatherData {
  main?: {
    temp: number;
    humidity: number;
    description: string;
  };
}

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent  implements OnInit {
  name = 'Talegaon Dabhade';
  destroy$ = new Subject<void>();
  data: any;
  weatherIcon: any;
  weatherDetails:any; 
  todayDate = new Date();
  constructor(
    public httpclient: HttpClient
  ) { }

  ngOnInit() {
    this.getCurrentWeather(this.name);
  }


  getCurrentWeather(city: string) {
    const url = `${API_URL}/weather?q=${city}&appid=${API_KEY}`;
    return this.httpclient.get<WeatherData>(url)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (results) => {
          console.log('CurrentWeather: ', results);
              this.data = results.main;
              this.weatherDetails = results.main;
        },
        (error) => {
          console.error('Error fetching weather data:', error);
        }
      );
  }
}

