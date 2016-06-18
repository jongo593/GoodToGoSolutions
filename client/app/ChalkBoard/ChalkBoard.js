'use strict';

angular.module('jonProfileApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('ChalkBoard', {
        url: '/ChalkBoard',
        template: '<chalk-board></chalk-board>'
      });
  });
