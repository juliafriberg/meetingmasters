'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index'});
}])
.controller('loginCtrl', [function($scope) {
  $scope.loggedin = true;
  $scope.login = function () {
    $scope.loggedin = !$scope.loggedin;
  }
}]);
