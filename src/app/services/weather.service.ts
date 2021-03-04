import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { secrets } from 'src/secrets';
import { WeatherResponse } from '../model/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly WEATHER_API_URL = `/weatherApi/data/2.5/weather?q={city}&appid=${secrets.weatherApiKey}`

  constructor(private _httpClient: HttpClient) { }

  public getWeatherData(city: string): Observable<WeatherResponse> {
    const url = this.WEATHER_API_URL.replace('{city}', city);

    return this._httpClient.get<WeatherResponse>(url).pipe(tap(console.log));
  }
}
