define([
    'angular',
    'angular-route',
    './view1/view1'
], function (angular, ngRoute, view1) {
    'use strict';

    return angular.module('myApp', [
        'ngRoute',
        'myApp.view1',
        
        ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);


});