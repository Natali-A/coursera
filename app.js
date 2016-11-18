(function () {
  'use strict';

  angular.module("myApp", [])
  .controller("myController", ['$scope', '$filter', myCtrlFunc]);

  function myCtrlFunc($scope, $filter) {
    $scope.name = "natali";

    $scope.upper = function(){
      var upperFilter = $filter('uppercase');
      $scope.name = upperFilter($scope.name);
    }
  }
})();
