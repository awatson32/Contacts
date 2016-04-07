'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('MainCtrl', function ($scope, userservice) {
    $scope.users = userservice.query();
    
    $scope.addUser = function() {
        
    }
  });
