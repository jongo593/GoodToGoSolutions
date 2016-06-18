'use strict';

angular.module('goodToGoSolutionsApp.auth', [
  'goodToGoSolutionsApp.constants',
  'goodToGoSolutionsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
