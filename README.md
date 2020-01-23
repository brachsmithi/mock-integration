# MockIntegration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Integration tests
## Running integration tests
Integration tests run a mock server on port 9900. A proxy file forwards API requests to ngapimock, which returns responses from JSON files.

```
npm run e2e_mock
```

## Creating integration tests
The integration tests are included under the `e2e` directory, as they use protractor and share common functionality with the e2e tests. The app is configured such that `*.e2e-spec.ts` files will run in the e2e suite, while files matching `*.int-spec.ts` are integration.

The mock responses live under `e2e/mock/response/mock`, and the presets are nextdoor at `e2e/mock/response/preset`.

## Running dev interface
The application can run locally against the mocks, which are configurable through the dev interface on port 9900.

Start the app in mock mode.

```
npm run start_mock
```
Start the dev interface.

```
node e2e/mock/server/local-mock-server.js
```
Manage responses at `http://localhost:9900/dev-interface`.

