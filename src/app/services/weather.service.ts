import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { secrets } from 'src/secrets';
import { CommonResponse } from '../model/common-response';
import { WeatherResponse } from '../model/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly WEATHER_API_URL = `weatherApi/data/2.5/weather?q={city}&units=metric&appid=${secrets.weatherApiKey}`

  constructor(private _httpClient: HttpClient) { }

  public getWeatherData(city: string): Observable<CommonResponse<WeatherResponse>> {
    const url = this.WEATHER_API_URL.replace('{city}', city);

    return this._httpClient.get<WeatherResponse>(url)
      .pipe(
        map(res => {
          const response = this.mapResponse(res)
          return response;
        }),
        catchError(err => {
          const error = this.mapError(err);
          return of(error);
        }));
  }

  private mapResponse(res: any): CommonResponse<WeatherResponse> {
    return {
      success: true,
      payload: res
    } as CommonResponse<WeatherResponse>;
  }

  private mapError(err: HttpErrorResponse): CommonResponse<WeatherResponse> {
    return {
      success: false,
      errorMessage: err.error.message
    } as CommonResponse<WeatherResponse>;
  }
}
