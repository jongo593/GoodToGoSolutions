'use strict';

angular.module('jonProfileApp', [
  'jonProfileApp.auth',
  'jonProfileApp.admin',
  'jonProfileApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngAnimate',
  'angular-scroll-animate'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })

  .constant('APP_CONFIG', {
    serverUrl: 'localhost:3000'
  });
