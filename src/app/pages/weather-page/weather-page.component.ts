import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { CommonResponse } from 'src/app/model/common-response';
import { Weather, WeatherResponse } from 'src/app/model/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit, OnDestroy {
  private _cityNameChange = new Subject<string>();
  private _weather?: Weather;
  private _destroyed = new Subject();

  private _loadingCounter = 0;
  private _error = false;
  private _responseMessage = '';

  private readonly ICON_URL = 'http://openweathermap.org/img/wn/';
  private readonly SEARCH_DELAY = 600;

  get isLoading(): boolean {
    return this._loadingCounter > 0;
  }

  get hasError(): boolean {
    return this._error;
  }

  get responseMessage(): string {
    return this._responseMessage;
  }

  get weather(): Weather | undefined {
    return this._weather;
  }

  get weatherIconUrl(): string {
    return this._weather ? `${this.ICON_URL}/${this._weather?.icon}@2x.png` : '';
  }

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.observeInputChanges();
  }

  private observeInputChanges() {
    this._cityNameChange
      .pipe(
        filter(name => !!name && name.trim().length > 0),
        debounceTime(this.SEARCH_DELAY),
        tap(() => {
          ++this._loadingCounter;
          this._error = false;
        }),
        mergeMap(cityName => this._weatherService.getWeatherData(cityName)),
        tap(weather => this.handleResponse(weather)),
        takeUntil(this._destroyed),
      )
      .subscribe()
  }

  public emitCityNameChange(event: KeyboardEvent): void {
    const name = (event?.target as HTMLInputElement).value;
    this._cityNameChange.next(name);
  }

  private handleResponse(res: CommonResponse<WeatherResponse>): void {
    this._loadingCounter--;
    console.log(this._loadingCounter);

    res.success
      ? this.handleSuccess(res.payload)
      : this.handleError(res.errorMessage)
  }

  private handleSuccess(weatherResponse: WeatherResponse): void {
    const weather = new Weather(weatherResponse);
    this._weather = weather;
    console.log(this._weather);
  }

  private handleError(errorMessage: string): void {
    this._responseMessage = errorMessage;
    this._error = true;
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
