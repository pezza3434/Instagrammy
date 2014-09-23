var instagrammy = angular.module('instagrammy', ['ngRoute', 'ngCookies']);

instagrammy.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/loggedin', {
        templateUrl: 'views/loggedin.html',
        controller: 'LoginController'
    }).
    when('/yourfeed', {
        templateUrl: 'views/yourfeed.html'
    }).
    when('/popular', {
        templateUrl: 'views/popularfeed.html'
    }).
    otherwise({
            templateUrl: 'views/home.html'
        });
}]);

instagrammy.controller('AppController', ['$scope', 'LoginService', '$cookieStore', function($scope, LoginService, $cookieStore){

    window.addEventListener('message', function(event){
        console.log('post message has been received');
        console.log(JSON.parse(event.data));

        var data = JSON.parse(event.data);

        LoginService.set_user_access_token(data.access_token);
        $cookieStore.put('access_token', data.access_token);
        LoginService.set_loggedIn(true);

        $scope.$broadcast('login-form', data);



    });



}]);


