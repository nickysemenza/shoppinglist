'use strict';
angular.module('app').factory('ApiRest', function(Restangular,urls) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl(urls.BASE_API);
  });
});
