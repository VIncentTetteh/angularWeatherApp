import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from 'src/app/services/weatherapi.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { WeatherApiObjects } from './../../classes/WeatherApiObjects';
import { SharedWeatherDataService } from 'src/app/shared/shared-weather-data.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private weatherApi:WeatherapiService,
    private sharedWeatherService:SharedWeatherDataService
    ) { }

  weatherData!:WeatherApiObjects;
  weatherLocationForm!:FormGroup
  weatherDataSubscription!: Subscription;

  ngOnInit(): void {
    this.getFormDataAndValidate();
    this.getWeatherApi();
  }

  getFormDataAndValidate(){
    this.weatherLocationForm = this.formBuilder.group({
      location: ['', Validators.required]
    });
  }

  getWeatherApi(){
    if(this.weatherLocationForm.valid){
      this.weatherApi.getWeather(this.weatherLocationForm.value.location).subscribe({
        next:(res) =>{
          this.weatherData = res;
          this.sharedWeatherService.loadWeatherData(res);
        },
        error:(err) =>{
          this.sharedWeatherService.loadWeatherDataError(err.error.message)
          console.log(err.error.message);
        }
      });
    }
  }

  // ngOnDestroy() {
  //   if (this.weatherDataSubscription) {
  //    this.weatherDataSubscription.closed;
  //   }
  //  }

}
