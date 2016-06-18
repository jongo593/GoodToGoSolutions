'use strict';

angular.module('jonProfileApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('blog', {
        url: '/blog',
        template: '<blog></blog>'
      });
  });
