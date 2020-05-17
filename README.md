# AngularInterceptor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## angular service interceptors to inject bearer token with every service dynamically

1. add TokenInterceptor service under app

2. register this service in app.module.ts as a providers

3. ng serve

4. open browser network tab "https://jsonplaceholder.typicode.com/posts" this url is calling

5. you can check 'Authorization bearer' under 'request headers' are passing 'dummytoken'

6. you can set it to your actual token and don't need to send it with every service call manually