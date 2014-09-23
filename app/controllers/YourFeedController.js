instagrammy.controller('YourFeedController', ['$scope', 'RequestService', function($scope, RequestService){

    RequestService.get_recent_feed().success(function(data){
       $scope.feed = data.data;
       console.log(data.data);
       console.log(data);
    });


}]);