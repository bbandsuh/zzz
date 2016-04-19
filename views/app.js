var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //$urlRouterProvider.otherwise('/home.html');
  $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "/home.html"
    })
    .state('teams', {
        url: "/teams",
        templateUrl: "/teams.html"
    })
    .state('users', {
        url: "/users",
        templateUrl: "/users.html"
    })
    .state('assess', {
        url: "/assess",
        templateUrl: "/assess.html"
    });
  });
