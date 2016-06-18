'use strict';

angular.module('goodToGoSolutionsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('showCase', {
        url: '/showcase',
        template: '<showcase></showcase>'
      });
  });
