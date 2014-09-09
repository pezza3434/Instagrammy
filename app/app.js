var instagrammy = angular.module('instagrammy', ['ngRoute']);

instagrammy.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/loggedin', {
        templateUrl: 'views/loggedin.html',
        controller: 'LoginController'
    }).
    otherwise({
            templateUrl: 'views/home.html'
        });
}]);

instagrammy.controller('AppController', function($scope){

    window.addEventListener('message', function(event){
        console.log('post message has been received');
        console.log(JSON.parse(event.data));

        var data = JSON.parse(event.data);

        $scope.$broadcast('login-form', data);

    });

});


