
define([
    'require',
    'angular',
    'landing/app'
], function (require, ng) {
    'use strict';


    require(['domReady!'], function (document) {
        ng.bootstrap(document.getElementById('AngularContainer'), ['landingApp']);
    });
});