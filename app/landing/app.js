define([
    'angular',
    'angular-route',
    './login/views/loginView',
    './offers/views/offers'
],function(angular, ng, loginview){


return angular.module('landingApp', [
  'ngRoute',
  'landingApp.loginView',
  'landingApp.offers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

});


