
define(['angular','angular-route', 'landing/login/controller/loginController.js'],function(angular,ng, loginCtrl){

'use strict';

angular.module('landingApp.loginView', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'landing/login/views/loginView.html',
   controller: loginCtrl
  });
}])

});



