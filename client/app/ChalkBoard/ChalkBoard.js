'use strict';

angular.module('goodToGoSolutionsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('ChalkBoard', {
        url: '/ChalkBoard',
        template: '<chalk-board></chalk-board>'
      });
  });
