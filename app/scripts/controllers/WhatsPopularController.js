instagrammy.controller('WhatsPopularController', ['$scope', 'RequestService', function($scope, RequestService){

    RequestService.get_popular_feed().success(function(data){
        $scope.feed = data.data;
    });

    $scope.refresh = function(){
        RequestService.get_popular_feed().success(function(data){
            $scope.feed = data.data;
        });
    };

    $scope.submit = function(){
        console.log($scope.input_text);
        RequestService.get_popular_from_tag($scope.input_text).success(function(data){
            $scope.feed = data.data;
        });
    };


}]);
