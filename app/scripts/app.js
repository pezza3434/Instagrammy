'use strict';

/**
 * @ngdoc overview
 * @name alexappApp
 * @description
 * # alexappApp
 *
 * Main module of the application.
 */
/* jshint ignore:start */
var instagrammy = angular.module('instagrammy', ['ngRoute', 'ngCookies']);
/* jshint ignore:end */

instagrammy.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/loggedin', {
        templateUrl: 'views/loggedin.html',
        controller: 'LoginController'
    }).
        when ('/dashboard', {
            templateUrl: 'views/dashboard.html'
        }).
        when ('/login', {
            templateUrl: 'views/login.html'
        }).
        when('/yourfeed', {
            templateUrl: 'views/yourfeed.html'
        }).
        when('/popular', {
            templateUrl: 'views/popularfeed.html'
        }).
        otherwise({
            templateUrl: 'views/dashboard.html'
        });
}]);

instagrammy.run(function($rootScope, $location, LoginService) {
    $rootScope.$on("$routeChangeStart", function (event, next) {
        if (!LoginService.get_user().loggedIn) {
            // no logged user, redirect to /login
            if (next.templateUrl === 'views/login.html') {
            } else {
                $location.path('/login');
            }
        }
    });
});

instagrammy.controller('AppController', ['$scope', 'LoginService', '$cookieStore', '$location', function($scope, LoginService, $cookieStore, $location){

    window.addEventListener('message', function(event){
        var data = JSON.parse(event.data);
        LoginService.set_user_access_token(data.access_token);
        $cookieStore.put('access_token', data.access_token);
        LoginService.set_loggedIn(true);
        $scope.$broadcast('login-form', data);
        $location.path('/dashboard');
    });


}]);
