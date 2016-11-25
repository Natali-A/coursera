(function () {
  'use strict';

  angular.module("myApp", [])
  .controller("shoppingListController1", shoppingListController1)
  .controller("shoppingListController2", shoppingListConroller2)
  .factory("ShoppingListFactory", ShoppingListServiceFactory);

shoppingListController1.$inject = ['ShoppingListFactory'];
function shoppingListController1(ShoppingListFactory) {
  var shop1 = this;
  shop1.name = "";
  shop1.quant = "";
  var service = ShoppingListFactory();

  shop1.items = service.getItems();
  shop1.addItemToList = function() {
    service.addItem(shop1.name, shop1.quant);
  }
}

shoppingListConroller2.$inject = ['ShoppingListFactory'];
function shoppingListConroller2(ShoppingListFactory) {
  var shop2 = this;

  shop2.name = "";
  shop2.quant = "";
  var service = ShoppingListFactory();

  shop2.items = service.getItems();
  shop2.addItemToList = function() {
    service.addItem(shop2.name, shop2.quant);
  }
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

function ShoppingListServiceFactory() {
  return function () {
    return new ShoppingListService();
  };
}
})();
