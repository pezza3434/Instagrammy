var RequestService = function($http, $cookieStore){

    var access_token = $cookieStore.get('access_token');
    console.log(access_token);

    this.get_user_details = function(){
        var link = 'https://api.instagram.com/v1/users/self?access_token=' + access_token + '&callback=JSON_CALLBACK';
        return $http.jsonp(link);
    };

    this.get_recent_feed = function(){
        var link = 'https://api.instagram.com/v1/users/self/feed?access_token=' + access_token + '&callback=JSON_CALLBACK';
        return $http.jsonp(link);
    };

    this.get_recently_liked = function(){
        var link = 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + access_token + '&callback=JSON_CALLBACK';
        return $http.jsonp(link);
    };

    this.get_popular_feed = function(){
        var link = 'https://api.instagram.com/v1/media/popular?access_token=' + access_token + '&callback=JSON_CALLBACK';
        return $http.jsonp(link);
    };

    this.get_popular_from_tag = function(tag){
        var link = 'https://api.instagram.com/v1/tags/'+ tag +'/media/recent?access_token=' + access_token + '&callback=JSON_CALLBACK';
        return $http.jsonp(link);
    };
}

angular.module('instagrammy').service('RequestService',['$http', '$cookieStore', RequestService]);


