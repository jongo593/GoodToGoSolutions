'use strict';

angular.module('jonProfileApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('contactUs', {
        url: '/contactUs',
        template: '<contactus></contactus>'
      });
  });
