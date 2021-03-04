export interface WeatherAir {
  temp: number;
  pressure: number;
}

export interface WeatherDescription {
  main: string;
  description: string;
  icon: string;
}

export interface WeatherResponse {
  weather: WeatherDescription;
  main: WeatherAir;
  name: string
}

export class Weather {
  private _temperature: number;
  private _pressure: number;
  private _title: string;
  private _description: string;
  private _icon: string;
  private _cityName: string;

  get temperature(): number {
    return this._temperature;
  }

  get pressure(): number {
    return this._pressure;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get icon(): string {
    return this._icon;
  }

  get cityName(): string {
    return this._cityName;
  }


  constructor(weatherResponse: WeatherResponse) {
    this._temperature = weatherResponse.main.temp;
    this._pressure = weatherResponse.main.pressure;

    this._title = weatherResponse.weather.main;
    this._description = weatherResponse.weather.description;
    this._icon = weatherResponse.weather.icon;

    this._cityName = weatherResponse.name;
  }
}
