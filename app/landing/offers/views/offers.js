define(['angular', 'angular-route'], function(angular){


'use strict';

angular.module('landingApp.offers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/offers', {
    templateUrl: 'landing/offers/views/offers.html',
    controller:'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {

$scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'age': 1},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 2},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 3}
  ];

  $scope.orderProp = 'age';
});



});