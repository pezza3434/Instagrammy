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

instagrammy.controller('AppController', ['$scope', 'LoginService', '$cookieStore', function($scope, LoginService, $cookieStore){

    window.addEventListener('message', function(event){
        console.log('post message has been received');
        console.log(JSON.parse(event.data));

        var data = JSON.parse(event.data);

        LoginService.set_user_access_token(data.access_token);
        $cookieStore.put('access_token', data.access_token);
        LoginService.set_loggedIn(true);

        $scope.$broadcast('login-form', data);

        console.log('hit app controller');

    });


}]);
