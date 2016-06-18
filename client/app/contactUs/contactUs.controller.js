'use strict';

(function() {

angular.module('goodToGoSolutionsApp')
  .component('contactus', {
    templateUrl: 'app/contactUs/contactUs.html',
    controller: ContactUsController
  });

  function ContactUsController ($scope, $timeout, $window) {


    $('#typed').typed({
      strings: ['We are available for Hire! We want to hear about your projects!'],
      typeSpeed: 0
    });

    $scope.rollOut = function (el, form) {
      if(form.$valid) {

        $timeout(() => {
          angular.element(el).remove();
          $scope.hideEmail = true
        }, 300);

        $timeout(() => {
          $scope.showConfirm = true;
          $window.open('mailto:Ajsantos219@gmail.com?subject=' + form.name + ': ' + form.subject +
            '&body='+form.content,'_self');
        }, 400);

        angular.element(el).addClass('animated bounceOutRight');
      } else {
        angular.element(el).removeClass('animated shake');
        angular.element(el).addClass('animated shake');
        $timeout(() => {
          angular.element(el).removeClass('animated shake');
        }, 1000);
      }
    };

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
