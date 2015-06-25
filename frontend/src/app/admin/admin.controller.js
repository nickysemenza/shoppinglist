'use strict';

angular.module('app')
.controller('AdminController', ['$scope','ApiRest','Auth', function ($scope, ApiRest,Auth) {

    $scope.main = 'test';


    ApiRest.one('locations').get().then(function(data)
    {
      console.log(data);
      $scope.locations = data;

    });
    }]);

