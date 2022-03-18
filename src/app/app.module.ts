import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WeatherLocationNotFoundComponent } from './components/weather-location-not-found/weather-location-not-found.component';
import { WeatherImageAndTempConvertComponent } from './components/weather-image-and-temp-convert/weather-image-and-temp-convert.component'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherComponent,
    PageNotFoundComponent,
    WeatherLocationNotFoundComponent,
    WeatherImageAndTempConvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
