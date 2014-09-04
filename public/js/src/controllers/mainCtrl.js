mean.controller('mainCtrl', ['$scope','UserService',
  function($scope, UserService) {
    $scope.title = 'User Administation';
    $scope.user = "root";

    $scope.users = UserService.getUsers();
  }
]);