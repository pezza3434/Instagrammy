var DashboardService = function(RequestService){
    var _recently_liked = [];
    var _feed = [];

    var _build_feed = function(){
 _feed = [];
        RequestService.get_recent_feed().success(function(data){
            var number_to_display = 4;
            for(var x = 0; x < number_to_display; x++){
                _feed.push(data.data[x].images);

            }

        });
    };

    var _build_recently_liked_photos = function(){
        _recently_liked = [];
        RequestService.get_recently_liked().success(function(data){
            var number_to_display = 4;
            for(var x = 0; x < number_to_display; x++){
                _recently_liked.push(data.data[x].images);

            }
        });
    };

    this.get_feed = function(){
        console.log('get_feed is hit');
        _build_feed();
        return _feed;
    };

    this.get_recently_liked_photos = function(){
        _build_recently_liked_photos();
        return _recently_liked;
    };
};


instagrammy.service('DashboardService', ['RequestService', DashboardService]);