'use strict';

angular.module('app').controller('HomeController', ['$rootScope', '$scope', '$location','ApiRest','ApiRest',
	function ($rootScope, $scope, $location,ApiRest) {

	var refresh_data = function()
	{
		ApiRest.one('list').get().then(function(data)
	    {
	      console.log(data);
	      $scope.list = data;

	    });

		ApiRest.one('list/99').get().then(function(data)
	    {
	      console.log(data);
	      $scope.list_cat = data;

	    });
	}
	refresh_data();
	$scope.selected_product=null;

 	ApiRest.one('products').get().then(function(data)
    {
      console.log(data);
      $scope.products = data;
    });
	$scope.addSelectedProduct = function(quantity)
	{
		if($scope.selected_product===null)
			return;
		ApiRest.one('list/add/'+$scope.selected_product.id+'/'+quantity).get().then(function(data)
	    {
	      console.log(data);
	      $scope.list = data;
	      $scope.selected_product=null;
	       refresh_data();
	    });
	}

	$scope.removeRow = function (productIndex) {
	      console.log(productIndex);
	      ApiRest.one('list/check/'+productIndex).get().then(function(data)
		    {
		      console.log(data);
		      refresh_data();
		    });
	    };
}]);
