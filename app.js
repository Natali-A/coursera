(function () {
  'use strict';

  angular.module("myApp", [])
  .controller("AddingListController", AddingListController)
  .controller("ShowingListController", ShowingListController)
  .service("ShoppingListService", ShoppingListService)
  .filter('loves', lovesFilterFactory);

AddingListController.$inject = ['ShoppingListService'];
function AddingListController(ShoppingListService) {
  var addList = this;
  addList.name = "";
  addList.quant = "";

  addList.addItemToList = function() {
    ShoppingListService.addItem(addList.name, addList.quant);
  }
}

ShowingListController.$inject = ['ShoppingListService'];
function ShowingListController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();
}

function ShoppingListService () {
  var service = this;
  var items = [];

  service.addItem = function(name, quant) {
    items.push({name: name, quant: quant});
  };

  service.getItems = function() {
    return items;
  }

}



myController.$inject = ['$scope', '$filter', 'lovesFilter'];
  function myController($scope, $filter, lovesFilter) {
    $scope.name = "natali";

    $scope.upper = function(){
      var upperFilter = $filter('uppercase');
      $scope.name = upperFilter($scope.name);
    };

    $scope.sayMessage = function(){
      var msg = "natali likes food";
      return msg;
    };

    $scope.sayLoveMessage = function() {
      var msg= "natali likes food";
      return lovesFilter(msg);
    };

  }

  function lovesFilterFactory(){
    return function(input) {
      return input.replace("likes", "loves");
    }
  }
})();
