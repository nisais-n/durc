import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherAppParams } from 'src/app/core/models/weather-params-model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnDestroy {
  model: WeatherAppParams;
  private getWeather?: Subscription;
  weatherData: any;
  cityWeatherList: any = [];

  alertVisible: boolean = false;
  errMsg: any;

  constructor(
    private _weatherService: WeatherService,

  ) {
    this.model = {
      lat: '',
      long: ''
    }
  }

  onFSubmit() {

    if (!this.model.lat || !this.model.long) {
      this.alertVisible = true;
      this.errMsg = "Invalid input";
      return;
    }

    this.getWeather = this._weatherService.getWetaher(this.model)
      .subscribe({
        next: (response) => {
          if (response.ok === true) {
            console.log("Request was successful:", response);
            this.cityWeatherList?.push(response);

            this.onReset();
          }
        },
        error: (error) => {
          console.error("An error occurred:", error);
          this.errMsg = error.status + '\n\n' + error.message;
          this.alertVisible = true;
        }
      });
  }

  onReset() {
    this.model = {
      lat: '',
      long: ''
    };
    this.errMsg = '';
    this.alertVisible = false;
  }


  onInputFocus() {
    this.errMsg = '';
    this.alertVisible = false;
  }
  ngOnDestroy(): void {
    this.getWeather?.unsubscribe();
  }
}
