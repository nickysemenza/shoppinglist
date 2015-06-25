'use strict';

angular.module('app').controller('ProductController', ['$rootScope', '$scope', '$location','ApiRest','ApiRest',
	function ($rootScope, $scope, $location,ApiRest) {

	$scope.stores = [];

$scope.newProducts = [
  {
    "name": "omg"
  }
];

ApiRest.one('stores').get().then(function(data)
	    {
	      console.log(data);
	      $scope.stores = data;

	    });

$scope.removeRow = function (productIndex) {
      $scope.newProducts.splice(productIndex, 1);
    };
    $scope.addRow = function() {
      $scope.newProducts.push({});
    };
    $scope.update = function () {
      ApiRest.all('products/bulk').post($scope.newProducts).then(function(data)
      {
        console.log(data);
        console.log('updated!');
        $location.path('/');
      });
    };





}]);
