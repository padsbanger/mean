'use strict';

mean.factory('UserService', function() {
  return {
    currentUser: undefined,
    isAuthenticated: function() {
      return !!this.currentUser;
    }
  };
});