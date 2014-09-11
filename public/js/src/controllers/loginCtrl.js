mean.controller('loginCtrl', ['$scope', '$http','UserService',
  function($scope, $http, UserService) {

    $scope.isLogged = UserService;
    console.log('1 '+ $scope.isLogged);
    $scope.userLogin = function() {
      $http.post('/login', {username: $scope.user.login, password: $scope.user.password}).then(function(response) {
        if(response.data.success) {
          UserService.currentUser = response.data.user;
          console.log('logged in!');
        } else {
          console.log('failed to log in!');
        }
        console.log(response.data);
      });
    };
  }
]);