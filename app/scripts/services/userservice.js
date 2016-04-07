'use strict';

/**
 * @ngdoc service
 * @name contactsApp.userservice
 * @description
 * # userservice
 * Factory in the contactsApp.
 */
angular.module('contactsApp')
  .factory('userservice', function ($resource) {
    return $resource('http://localhost:3000/db/:user', {user: '@user'});
    
  });
