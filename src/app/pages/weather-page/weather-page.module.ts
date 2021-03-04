import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WeatherPageComponent } from './weather-page.component';

@NgModule({
  declarations: [WeatherPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ]
})
export class WeatherPageModule { }
