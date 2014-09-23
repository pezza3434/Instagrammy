angular.module('instagrammy').service('RequestService',['$http', '$cookieStore', function($http, $cookieStore){

    var access_token = $cookieStore.get('access_token');
    console.log(access_token);

    this.get_recent_feed = function(){
        var link = 'https://api.instagram.com/v1/users/self/feed?access_token=' + access_token + '&callback=JSON_CALLBACK';
        return $http.jsonp(link);
    };

    this.get_popular_feed = function(){
        var link = 'https://api.instagram.com/v1/media/popular?access_token=' + access_token + '&callback=JSON_CALLBACK';
        return $http.jsonp(link);
    };



}]);
