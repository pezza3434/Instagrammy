angular.module('instagrammy').service('UserService',[function($http){

    var user_data = {
        accessToken: ''
    };

    this.set_user_data = function(url){

        var token = '40704095.42278e9.aefe18218be94f22bb586af19a134000';

        user_data.accessToken = token;
    };

    this.return_user_data = function(){
        return user_data;
    };





}]);