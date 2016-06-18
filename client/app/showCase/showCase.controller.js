'use strict';

(function() {

angular.module('goodToGoSolutionsApp')
  .component('showcase', {
    templateUrl: 'app/showCase/showCase.html',
    controller: ShowCaseController
  });

  function ShowCaseController ($scope) {

    $scope.showcases = [
      {
        title: 'TechOTG',
        image: 'assets/images/showcases/techOTG.jpeg',
        link: 'https://techotg.com/'
      },
      {
        title: 'Tania Matthews Team',
        image: 'assets/images/showcases/tania.jpeg',
        link: 'http://www.taniamatthewsteam.com/'
      },
      {
        title: 'Bode Realty',
        image: 'assets/images/showcases/jonathanBode.jpeg',
        link: 'http://bodeintrealty.com/'
      },
      {
        title: 'Emergency Restoration Services',
        image: 'assets/images/showcases/ers.jpeg',
        link: 'http://www.flwaterdamagerestoration.com/'
      }
    ];

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
