angular.module('educator').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
            
            when('/updateEducator', {
                templateUrl :'educator/educator.update.view.html',
                controller :'updateEducatorCtrl'
            }).
            when('/deleteEducator', {
                templateUrl :'educator/educator.delete.view.html',
                controller :'deleteEducatorCtrl'
            }).
            when('/showLookers', {
                templateUrl :'educator/show.lookers.view.html',
                controller :'showLookersCtrl'
            }).
            when('/showWeights', {
                templateUrl :'educator/show.weights.view.html',
                controller :'showWeightsCtrl'
            }).
            when('/setSleepTime', {
                templateUrl :'educator/set.sleeptime.view.html',
                controller :'setSleepTimeCtrl'
        });
}]);