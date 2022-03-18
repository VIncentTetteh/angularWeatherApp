import { Coordinate } from "./Coordinate";
import { Weather } from "./Weather";
import { Main } from './Main';
import { Wind } from "./Wind";
import { Clouds } from "./Clouds";
import { Climate } from "./Climate";

export interface WeatherApiObjects{
  coord: Coordinate;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Climate;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
