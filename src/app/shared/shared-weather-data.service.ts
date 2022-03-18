import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherApiObjects } from './../classes/WeatherApiObjects';

@Injectable({
  providedIn: 'root'
})
export class SharedWeatherDataService {

  private availableWeatherData = new BehaviorSubject<WeatherApiObjects | null>(null);
  private availableWeatherDataError = new BehaviorSubject<string|null>(null);

  constructor() { }

  loadWeatherData(weatherData: WeatherApiObjects){
    this.availableWeatherData.next(weatherData);
  }

  loadWeatherDataError(weatherDataError:string){
    this.availableWeatherDataError.next(weatherDataError);
  }

  getWeatherData(): Observable<WeatherApiObjects| null>{
    return this.availableWeatherData.asObservable();
  }

  getWeatherDataError(): Observable<string | null>{
    return this.availableWeatherDataError.asObservable();
  }
}
