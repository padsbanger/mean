var mean = angular.module('mean', ['ngRoute', 'ngAnimate']);

mean.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainCtrl'
    });

});