angular.module("myapp",["ngRoute","ngAnimate","ctrls","services"])
    .config(function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:"index.html",
            controller:"index"
        }).when("/list/:id",{
            templateUrl:"list.html",
            controller:"index"
        }).when("/show/:id",{
            templateUrl:"show.html",
            controller:"list"
        }).otherwise("/")

    })