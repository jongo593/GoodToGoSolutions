'use strict';

angular.module('goodToGoSolutionsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('team', {
        url: '/team',
        template: '<team></team>'
      });
  });
