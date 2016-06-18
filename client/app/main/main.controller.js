'use strict';

(function() {

//class MainController {
//
//  constructor() {
//
//  }
//
//  $onInit() {
//    this.animateElementInText = ($el) => {
//      console.log($el)
//      $el.removeClass('hidden-animate');
//      $el.addClass('animated fadeInUp');
//    }
//  }
//
//
//
//}

angular.module('jonProfileApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

  function MainController ($scope) {

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
