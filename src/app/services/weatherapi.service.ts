import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherapiService {

  constructor(private http:HttpClient) { }
  private apikey:string = "f2c34ddfc9674ea6c43789e984d40670"

  getWeather(location:string){
   return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apikey}&units=metric`);
  }
}
