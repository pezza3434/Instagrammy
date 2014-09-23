angular.module('instagrammy').service('LoginService', ['$http', '$cookieStore', function($cookieStore){

    var user = {
        loggedIn: false,
        access_token: null
    };

    if ($cookieStore.get('access_token')){
        user.loggedIn = true;
        console.log('hit it');
    }

    this.login = function(){
        var url = 'https://api.instagram.com/oauth/authorize/?client_id=42278e9a9ba04d12b0d308f00129cd69&redirect_uri=http://127.0.0.1/instagrammy/app/callback.html&response_type=token';
        var w = window.open(url, 'Instagram', 'WIDTH=400,HEIGHT=600');
    };

    this.set_loggedIn = function(value){
        user.loggedIn = value;
    };

    this.set_user_access_token = function(value){
        user.access_token = value;
    };

    this.get_user = function(){
        if ($cookieStore.get('access_token')){
            user.loggedIn = true;
            console.log('hit it');
        }


        return user;
    }

}]);

