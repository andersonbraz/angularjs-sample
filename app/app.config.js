angular.module('sampleApp').config(['$routeProvider',

    function config($routeProvider){
        $routeProvider
        .when('/',{
            templateUrl:"pages/home/home.page.html"
        })
        .when('/home',{
            templateUrl:"pages/home/home.page.html"
        })
        .when('/table',{
            templateUrl:"pages/table/table.page.html"
        })
        .when('/dashboard',{
            templateUrl:"pages/dashboard/dashboard.page.html"
        })
        .otherwise({
            redirectTo: "/"
        })
    }

]);