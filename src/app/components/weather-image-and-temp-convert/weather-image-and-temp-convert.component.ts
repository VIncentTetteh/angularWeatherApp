import { Component, Input, NgIterable, OnInit } from '@angular/core';
import { Weather } from 'src/app/classes/Weather';
import { WeatherApiObjects } from 'src/app/classes/WeatherApiObjects';

@Component({
  selector: 'app-weather-image-and-temp-convert',
  templateUrl: './weather-image-and-temp-convert.component.html',
  styleUrls: ['./weather-image-and-temp-convert.component.css']
})
export class WeatherImageAndTempConvertComponent implements OnInit {

  constructor() { }

  @Input() weatherDataIcon:Weather[] = [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
  }]

  @Input() convertTemp = () =>{}

  ngOnInit(): void {
  }

}
