'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.loginCtrl'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index'});
}]).
myApp.controller("loginCtrl", function($scope) {
  $scope.loggedin = true; /*function(){}*/
    $scope.login = function () {
        $scope.loggedin = !$scope.loggedin;
    }
});
