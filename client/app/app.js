'use strict';

angular.module('goodToGoSolutionsApp', [
  'goodToGoSolutionsApp.auth',
  'goodToGoSolutionsApp.admin',
  'goodToGoSolutionsApp.constants',
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
  })

  .run(function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', () => {
      window.scrollTo(0,0);
    });
  });
