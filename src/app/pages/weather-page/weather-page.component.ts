import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, debounceTime, switchMap, tap } from 'rxjs/operators';
import { Weather, WeatherResponse } from 'src/app/model/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {
  private _cityNameChange = new Subject<string>();
  private _weatherData = new Subject<Weather>();

  private _loadingCounter = 0;
  private _error = false;
  private _responseMessage = '';

  get isLoading(): boolean {
    return this._loadingCounter > 0;
  }

  get hasError(): boolean {
    return this._error;
  }

  get responseMessage(): string {
    return this._responseMessage;
  }

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.observeInputChanges();
  }

  private observeInputChanges() {
    this._cityNameChange
      .pipe(
        debounceTime(400),
        tap(() => this._loadingCounter++),
        switchMap(cityName => this._weatherService.getWeatherData(cityName)),
        tap(this.handleResponse),
        catchError(this.handleError)
      )
      .subscribe()
  }

  public emitCityNameChange(event: KeyboardEvent): void {
    const name = (event?.target as HTMLInputElement).value;
    this._cityNameChange.next(name);
  }

  private handleResponse(weatherResponse: WeatherResponse): void {
    const weather = new Weather(weatherResponse);
    this._weatherData.next(weather);

    console.log(weatherResponse);
    console.log(weather);

    this._loadingCounter--;

  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    this._responseMessage = `Couldn't download data. The following error occurred: ${error.message}`;
    this._error = true;
    return of();
  }

}
