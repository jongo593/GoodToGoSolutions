'use strict';

angular.module('jonProfileApp')
  .component('chalkBoardHeader', {
    templateUrl: 'app/ChalkBoard/ChalkBoardHeader.html',
    controller: chalkBoardHeaderController
  });

  function chalkBoardHeaderController ($scope) {
    $scope.postChalkDrawing = function () {

      var chalkboard = document.getElementById("chalkboard");
      //chalkboard = chalkboard[0];
      console.log(chalkboard);


      var pngUrl = chalkboard.toDataURL();
      console.log(pngUrl);




    }
  }
