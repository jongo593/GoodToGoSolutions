'use strict';

angular.module('jonProfileApp.auth', [
  'jonProfileApp.constants',
  'jonProfileApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
