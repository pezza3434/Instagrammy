 var LoginService = function($cookieStore){
     var user = {
         loggedIn: false,
         access_token: null
     };

     this.login = function(){
         var url = 'https://api.instagram.com/oauth/authorize/?client_id=42278e9a9ba04d12b0d308f00129cd69&redirect_uri=http://localhost:9000/callback.html&response_type=token';
         window.open(url, 'Instagram', 'WIDTH=400,HEIGHT=600');
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
        }
         return user;
     };
 };





instagrammy.service('LoginService', ['$cookieStore', LoginService]);

