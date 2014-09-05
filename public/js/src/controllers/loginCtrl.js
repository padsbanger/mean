mean.controller('loginCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.userLogin = function() {
      $http.post('/login', {userName: user.login, password: user.password}).then(function(response) {
        console.log(response.data);
      });
    };
  }
]);