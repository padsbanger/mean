<<<<<<< HEAD
<<<<<<< HEAD
mean.controller('loginCtrl', ['$scope', '$http','UserService',
  function($scope, $http, UserService) {
    $scope.isLogged = UserService;
    $scope.userLogin = function() {
      $http.post('/login', {username: $scope.user.login, password: $scope.user.password}).then(function(response) {
=======
mean.controller('loginCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.userLogin = function(username, password) {
      $http.post('/login', {username: username, password:password}).then(function(response) {
>>>>>>> 48c5f68... Fixed express warnings
        if(response.data.success) {
          UserService.currentUser = response.data.user;
          console.log('logged in!');
        } else {
          console.log('failed to log in!');
=======
mean.controller('loginCtrl', ['$scope', '$http', 'UserService', 'AuthService',
  function($scope, $http, UserService, AuthService) {
    $scope.isLogged = UserService;
    $scope.userLogin = function() {
      AuthService.userLogin($scope.user.username, $scope.user.password).then(function(success) {
        if (success) {
          console.log('ok');
>>>>>>> a1a1460... User Service and Auth Service
        }
      });
    };
  }
]);