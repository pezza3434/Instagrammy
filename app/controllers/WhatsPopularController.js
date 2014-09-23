instagrammy.controller('WhatsPopularController', ['$scope', 'RequestService', function($scope, RequestService){

    RequestService.get_popular_feed().success(function(data){
        $scope.feed = data.data;
        console.log(data.data);
        console.log(data);
    });


}]);
