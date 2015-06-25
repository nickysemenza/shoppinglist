'use strict';
angular.module('app')
.controller('RestrictedController', ['$rootScope', '$scope', 'Data','ApiRest', function ($rootScope, $scope, Data,ApiRest) {
    ApiRest.one('me').get().then(function(data)
    {
      $scope.me = data;

    });

    ApiRest.one('hub/cards').get().then(function(data)
    {
      $scope.cards = data;

    });

    ApiRest.one('orders').get().then(function(data)
    {
      $scope.orders = data;

    });

    $scope.closeAlert = function(index) {
      $scope.cards.splice(index, 1);
    };


  }])

  .controller('OrdersController', ['$rootScope', '$scope', 'Data','ApiRest', function ($rootScope, $scope, Data, ApiRest) {
    ApiRest.one('orders').get().then(function(data)
    {
      $scope.orders = data;
    });
  }])

  .controller('OrdersDetailController', ['$scope','$stateParams','ApiRest', function($scope, $stateParams,ApiRest) {
    console.log($stateParams);
    $scope.order_id = $stateParams.id;


    ApiRest.one('orders');
    //get specific order
  }]);
