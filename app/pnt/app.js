
define([
    'angular',
    'angular-route',
    'domReady!',
    '/pnt/pntView/pntCommonView.js'
],function(angular, ng, document,loginview){

'use strict';


// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.pntCommonView'
 
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/pnt'});
}]);

//angular.module('landingApp', ['myApp'])


 angular.bootstrap(document.getElementById('AngularContainer1'), ['myApp']);

});


