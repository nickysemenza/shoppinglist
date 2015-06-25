'use strict';

angular.module('app')
  .controller('AdminUsersController', ['$rootScope', '$scope', 'Data','$http','urls','ApiRest', function ($rootScope, $scope, Data,$http,urls, ApiRest) {
    ApiRest.one('admin/users').get().then(function(data)
    {
      console.log(data);
      $scope.users = data;

    });
  }]);
