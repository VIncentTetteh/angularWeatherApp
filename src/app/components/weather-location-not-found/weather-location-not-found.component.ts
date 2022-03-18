import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-location-not-found',
  templateUrl: './weather-location-not-found.component.html',
  styleUrls: ['./weather-location-not-found.component.css']
})
export class WeatherLocationNotFoundComponent implements OnInit {

  constructor() { }
  @Input() errorMessage!:string | null;
  ngOnInit(): void {

  }


}
