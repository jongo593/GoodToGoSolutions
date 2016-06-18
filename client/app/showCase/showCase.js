'use strict';

angular.module('jonProfileApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('showCase', {
        url: '/showcase',
        template: '<showcase></showcase>'
      });
  });
