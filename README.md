# Mobile money frontend project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
#Node version: v16.14.2

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Account
username: congth  // acount mock test phía backend
pass: 1234565   // mock test passwork ko can 
## install lib normally if it has already been on package.json file then skip
npm i --save ./core_lib/mobile-money-0.0.1.tgz
npm i --save ./core_lib/mobile-money-layout-0.0.1.tgz
## install dependencies vs nexus vittel
package.json file dependencies change 
"mobile-money": "file:core_lib/mobile-money-0.0.1.tgz" -> "mobile-money": "0.0.1",
"mobile-money-layout": "file:core_lib/mobile-money-layout-0.0.1.tgz" -> "mobile-money-layout":"0.0.1",
run commandline: "npm config set registry http://nexus.digital.vn/repository/npm-group"
## reset dependencies npm
run commandline: "npm config set registry https://registry.npmjs.org"