'use strict';

mean.factory('AuthService', ['$http', '$q','UserService',
  function($http, $q, UserService) {

    return {
      userLogin: function(username, password) {
        var dfd = $q.defer();
        $http.post('/login', {
          username: username,
          password: password
        }).then(function(response) {
          if (response.data.success) {
            UserService.currentUser = response.data.user;
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      },

    };
  }
]);