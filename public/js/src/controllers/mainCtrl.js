mean.controller('mainCtrl', ['$scope','UserService',
  function($scope, UserService) {
    $scope.user = UserService;
    $scope.title = 'User Administation';
  }
]);