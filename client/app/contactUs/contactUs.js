'use strict';

angular.module('goodToGoSolutionsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('contactUs', {
        url: '/contactUs',
        template: '<contactus></contactus>'
      });
  });
