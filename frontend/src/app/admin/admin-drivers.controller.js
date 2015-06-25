'use strict';

angular.module('app')
  .controller('AdminDriversController', ['$rootScope', '$scope', 'Data','ApiRest', function ($rootScope, $scope, Data, ApiRest) {
    ApiRest.one('admin/drivers').get().then(function(data)
    {
      console.log(data);
      $scope.drivers = data;

    });

    ApiRest.one('admin/drivers/schedules/preferences').get().then(function(data)
    {
      console.log(data);
      $scope.schedule_preferences = data;

    });


    $scope.dayOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    $scope.hourOptions = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    $scope.minuteOptions = ['00','15','30','45',0];
    $scope.meridianOptions = ['AM','PM'];
    $scope.test1Options = ['Earhart Hall','Purdue Laundromat 1','Hillenbrand Hall'];
    $scope.test2Options = ['Bob Driver'];
    $scope.timechoices = [
      {
        'day': 'Tuesday',
        'start_hour': '2',
        'start_minute': '45',
        'start_meridian': 'PM',
        'end_hour': 'Earhart Hall',
        'end_minute': 'Bob Driver'
      },
      {
        'day': 'Thursday',
        'start_hour': '3',
        'start_minute': '00',
        'start_meridian': 'PM',
        'end_hour': 'Purdue Laundromat 1',
        'end_minute': 'Bob Driver'
      }
    ];

    $scope.removeRow = function (productIndex) {
      $scope.timechoices.splice(productIndex, 1);
    };
    $scope.addRow = function() {
      $scope.timechoices.push({});
    };
    $scope.update = function () {
     //todo
    };


  }]);
