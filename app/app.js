"use strict";

const app = angular.module('MyWebsite', ["ngRoute", "ui.materialize"]);

app.config(function($routeProvider) {
    $routeProvider.
    when(`/`, {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
    }).
    when(`/`, {
        templateUrl: 'partials/splash.html',
        controller: 'SplashCtrl'
    }).
    otherwise('/');

});
