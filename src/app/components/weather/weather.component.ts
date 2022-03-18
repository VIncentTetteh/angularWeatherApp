import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { SharedWeatherDataService } from 'src/app/shared/shared-weather-data.service';
import { WeatherApiObjects } from './../../classes/WeatherApiObjects';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private sharedWeatherService:SharedWeatherDataService,
    private router:Router,
    private route:ActivatedRoute,
    public loaderService:LoaderService
    ) { }

  weatherData!:WeatherApiObjects | null;
  weatherDataError!:string | null;
  isError:boolean = false;
  temp!:number
  feelsLike!:number;
  symbol:string = "C"
  isFeelSymbol:string = "C"
  isconverted = true;
  isfeelsConverted = true;

  weatherDataSubscription!: Subscription;
  weatherDataErrorSubscription!: Subscription;

  ngOnInit(): void {
    this.getWeatherData();
    this.getWeatherDataError();
  }

  getWeatherData(){
    this.sharedWeatherService.getWeatherData().subscribe({
      next:(res) =>{
        this.weatherData = res;
        this.temp = Math.round(res?.main.temp!);
        this.feelsLike = Math.round(res?.main.feels_like!)
        console.log("SharedData",this.weatherData)
      },
      error:(error) =>{
        console.log(error)
      }
    })
  }

  getWeatherDataError(){
    this.weatherDataErrorSubscription = this.sharedWeatherService.getWeatherDataError().subscribe({
      next:(res) =>{
        this.weatherDataError = res;
       if(res != null){
        this.isError = true;
        console.log("SharedError",this.weatherDataError);
       }


      },
      error:(error) =>{
        console.log(error)
      }
    })
  }

    identify(index: number, item: { description: string; }) {
      return item.description;
  }

  convertToFahriet(){
    if(this.isconverted){
      this.symbol = "F"
      this.temp = Math.round((this.temp * 9/5) + 32)
      this.isconverted = false;
    }else{
      this.symbol = "C"
      this.temp =  Math.round((this.temp - 32) * 5/9);
      this.isconverted = true;
    }
    this.convertFeelsToFahriet();
  }


  convertFeelsToFahriet(){
    if(this.isfeelsConverted){
      this.isFeelSymbol = "F"
      this.feelsLike = Math.round((this.feelsLike * 9/5) + 32)
      this.isfeelsConverted = false;
    }else{
      this.isFeelSymbol = "C"
      this.feelsLike =  Math.round((this.feelsLike - 32) * 5/9);
      this.isfeelsConverted = true;
    }
  }

  reload(){
    this.router.navigate(['/search'])
    .then(() =>{
      window.location.reload();
    })
  }

  // ngOnDestroy() {
  //   if (this.weatherDataSubscription) {
  //    this.weatherDataSubscription.unsubscribe();
  //   }
  //   if(this.weatherDataErrorSubscription){
  //     this.weatherDataErrorSubscription.unsubscribe();
  //   }
  //  }

}
