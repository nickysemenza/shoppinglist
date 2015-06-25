'use strict';
// create the module and name it app
// also include ngRoute for all our routing needs
var app = angular.module('app', ['ui.router','ngAnimate','restangular','ui.bootstrap']);

// configure our routes
app.config(['$httpProvider','$locationProvider','$urlRouterProvider','$stateProvider', function ($httpProvider,$locationProvider, $urlRouterProvider,$stateProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'HomeController'
        }).
      state('new-product', {
        url: '/products/new',
        templateUrl: 'app/main/new-product.html',
        controller: 'ProductController'
      });

    $locationProvider.html5Mode(true);
}]);


