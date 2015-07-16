var contactApp = angular.module('contactApp', ['ui.router', 'ngAnimate', 'toastr', 'LocalStorageModule', 'home', 'add-user', 'edit-user']);
contactApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    });