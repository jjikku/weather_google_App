import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { weatherData } from '../models/weather.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityName: string= "Wellington";
  weatherdata?: weatherData;
  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName="";
  }

  private getWeatherData(cityName: string){
    this.weatherservice.getWeatherData(cityName)
      .subscribe((response) => {
       
          this.weatherdata = response;
          console.log(response);
          
        }
      )
  }
  

}
