// login.config.js

    angular.module('educator')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/showEducator', {
                templateUrl :'views/educator/show.alleducator.view.html',
                controller :'ShowAllEducatorCtrl'
        }).
        when('/updateEducatorProfile', {
                templateUrl :'views/educator/educator.update.view.html',
                controller :'UpdateEducatorCtrl'
        })
        .when('/showLookers', {
            templateUrl :'views/educator/show.lookers.view.html',
            controller :'ShowLookersCtrl'
        }).
        when('/showWeights', {
            templateUrl :'views/educator/show.weights.view.html',
            controller :'ShowWeightsCtrl'
        }).
        when('/showRating', {
            templateUrl :'views/educator/show.ratings.view.html',
            controller :'ShowRatingCtrl'
        }).
        when('/setSleepTime', {
            templateUrl :'views/educator/set.sleeptime.view.html'
    });
}