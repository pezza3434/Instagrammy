instagrammy.controller('LoginController', ['$scope', 'UserService', function($scope){

    $scope.loggedIn = false;

    $scope.login = function(){
        var w = window.open('https://api.instagram.com/oauth/authorize/?client_id=42278e9a9ba04d12b0d308f00129cd69&redirect_uri=http://127.0.0.1/instagrammy/app/callback.html&response_type=token', 'Instagram', 'WIDTH=400,HEIGHT=600');
    };

    $scope.$on('login-form', function(data){

        $scope.$apply(function(){
            $scope.loggedIn = true;

        });

    });

}]);
