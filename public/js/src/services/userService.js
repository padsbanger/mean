'use strict';

mean.factory('UserService', ['$http',
  function($http) {

    var users = [{
      "id": 1,
      "username": "root",
      "role": "administrator"
    }, {
      "id": 2,
      "username": "strielok",
      "role": "user"
    }, {
      "id": 3,
      "username": "artyom",
      "role": "moderator"
    }, {
      "id": 4,
      "username": "Michał",
      "role": "user"
    }];

    return {
      getUsers: function() {

        return users;
      }

    };
  }
]);