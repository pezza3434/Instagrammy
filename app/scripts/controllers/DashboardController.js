instagrammy.controller('DashboardController', ['$scope', 'RequestService', 'DashboardService', function($scope, RequestService, DashboardService){


    RequestService.get_user_details().success(function(data){
        $scope.user_data = data.data;
    });

    $scope.recently_liked = DashboardService.get_recently_liked_photos();
    $scope.feed = DashboardService.get_feed();


}]);
