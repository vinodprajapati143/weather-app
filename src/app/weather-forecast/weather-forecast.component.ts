import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent  implements OnInit {
  name = 'Talegaon Dabhade';
  todayDate = new Date();
  forecasts: any; 

  constructor(private weatherService: WeatherService) {}

  
    ngOnInit() {
      this.weatherService.getWeatherForecast(this.name).subscribe((data: any) => {
        this.forecasts = data.list;
        console.log('forecasts: ', this.forecasts);
      });
    }
}
