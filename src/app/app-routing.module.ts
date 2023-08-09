import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherAppComponent } from './core/components/pages/weather-app/weather-app.component';

const routes: Routes = [

  {
    path: 'wthrApp',
    component: WeatherAppComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
