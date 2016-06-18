'use strict';

angular.module('goodToGoSolutionsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('blog', {
        url: '/blog',
        template: '<blog></blog>'
      });
  });
