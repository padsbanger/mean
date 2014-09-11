'use strict';

mean.factory('UserService', ['$http', '$q',
  function($http, $q) {

    return {
      currentUser: undefined,
      isAuthenticated: function() {
        return !!this.currentUser;
      }
    };
  }
]);