instagrammy.controller('LoginController', ['$scope', 'LoginService', function($scope, LoginService){

    $scope.loggedIn = false;

    $scope.$on('login-form', function(){
       $scope.$apply(function(){
           $scope.loggedIn = LoginService.get_user().loggedIn;
       });
    });

    $scope.login = function(){
      LoginService.login();
    };



}]);
