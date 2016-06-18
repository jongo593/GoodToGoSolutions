'use strict';

(function() {

angular.module('goodToGoSolutionsApp')
  .component('blog', {
    templateUrl: 'app/Blog/blog.html',
    controller: BlogController
  });

  function BlogController ($scope) {

    $scope.animateElementFadeInUp = function ($el) {
      $el.removeAttr('when-visible');
      $el.removeClass('hidden-animate');
      $el.addClass('animated fadeInUp');
    };

    $scope.animateElementFadeInLeft = function ($el) {
      $el.removeAttr('when-visible');
      $el.removeClass('hidden-animate');
      $el.addClass('animated fadeInLeft');
    };

    $scope.animateElementFadeInRight = function ($el) {
      $el.removeAttr('when-visible');
      $el.removeClass('hidden-animate');
      $el.addClass('animated fadeInRight');
    };

    $scope.animateElementFadeInDown = function ($el) {
      $el.removeAttr('when-visible');
      $el.removeClass('hidden-animate');
      $el.addClass('animated fadeInDown');
    };

    $scope.animateElementFadeIn = function ($el) {
      $el.removeAttr('when-visible');
      $el.removeClass('hidden-animate');
      $el.addClass('animated fadeIn');
    };
    $scope.animateElementRotateIn = function ($el) {
      $el.removeAttr('when-visible');
      $el.removeClass('hidden-animate');
      $el.addClass('animated rotateIn');
    };

  }

})();
