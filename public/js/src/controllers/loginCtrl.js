mean.controller('loginCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.userLogin = function() {
      $http.post('/login', {userName: user.login, password: user.password}).then(function(response) {
        if(response.data.success) {
          console.log('logged in!');
        } else {
          console.log('failed to log in!');
        }
        console.log(response.data);
      });
    };
  }
]);