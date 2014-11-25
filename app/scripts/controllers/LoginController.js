instagrammy.controller('LoginController', ['$scope', 'LoginService', function($scope, LoginService){

    $scope.loggedIn = LoginService.get_user().loggedIn;
    console.log($scope.loggedIn);


    $scope.$on('login-form', function(){
       $scope.$apply(function(){
           $scope.loggedIn = LoginService.get_user().loggedIn;
           console.log('logged in is');
           console.log($scope.loggedIn);
       });
    });

    $scope.login = function(){
      LoginService.login();
    };

}]);
