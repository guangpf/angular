angular.module("ctrls",["services"]).controller("index",["$scope","$http","indexData",function($scope,$http,indexData){
    indexData.then(function(data){
        $scope.data=data.data;
    })
}]).controller("list",function($scope,$routeParams){
    $scope.id=$routeParams.id;
})