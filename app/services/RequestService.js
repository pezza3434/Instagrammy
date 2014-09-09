angular.module('instagrammy').service('RequestService',['$http', function($http){

    var access_token = '40704095.42278e9.aefe18218be94f22bb586af19a134000';

    this.get_recent_feed = function(){
        return $http.jsonp('https://api.instagram.com/v1/users/40704095/media/recent?access_token=40704095.42278e9.aefe18218be94f22bb586af19a134000&callback=JSON_CALLBACK');
    };



}]);
