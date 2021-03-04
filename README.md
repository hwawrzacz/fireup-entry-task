# FireupEntryTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Prerequisites

### Initial set up

After downloading this repo run `npm install` to install all required packages and dependencies (you will need **npm** installed).

### Weather page functionality

To be able to use weather functionality, you need to add `src/secrets.ts` file. This file must export `secrets` object with weatherApiKey property. This property must hold value of your [Open weather API](https://openweathermap.org/current) key.

```typescript
export const secrets = {
  weatherApiKey: '<your API key>'
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.