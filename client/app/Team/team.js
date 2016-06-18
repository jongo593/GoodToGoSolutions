'use strict';

angular.module('jonProfileApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('team', {
        url: '/team',
        template: '<team></team>'
      });
  });
