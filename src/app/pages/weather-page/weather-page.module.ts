import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { WeatherPageComponent } from './weather-page.component';

@NgModule({
  declarations: [WeatherPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ]
})
export class WeatherPageModule { }
