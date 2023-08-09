import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})

export class CityListComponent {
  weatherData: any; // Change the type to match the structure of the JSON response

  constructor() { }

  @Input() cityWeatherList?: any;
}