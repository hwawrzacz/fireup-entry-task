import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPageComponent } from './weather-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [WeatherPageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ]
})
export class WeatherPageModule { }
