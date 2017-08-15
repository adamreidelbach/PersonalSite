"use strict";

const app = angular.module('MyWebsite', ["ngRoute", "ui.materialize"]);

app.config(function($routeProvider) {
    $routeProvider.
    when(`/`, {
        templateUrl: 'partials/splash.html'
    }).
    when(`/#about`, {
        templateUrl: 'partials/about.html'
    }).
    when(`/#projects`, {
        templateUrl: 'partials/projects.html'
    }).
    when(`/#tech`, {
        templateUrl: 'partials/tech.html'
    }).
    when(`/#contact`, {
        templateUrl: 'partials/contact.html'
    }).
    otherwise('/');

});
