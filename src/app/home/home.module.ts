import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CurrentWeatherComponent,
  WeatherForecastComponent]
})
export class HomePageModule {}
