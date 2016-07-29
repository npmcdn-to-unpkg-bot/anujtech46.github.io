// login.config.js

    angular.module('educator')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/showEducator', {
                templateUrl :'views/educator/show.alleducator.view.html',
                controller :'ShowAllEducatorCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/updateEducatorProfile', {
                templateUrl :'views/educator/educator.update.view.html',
                controller :'UpdateEducatorCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/showLookers', {
            templateUrl :'views/educator/show.lookers.view.html',
            controller :'ShowLookersCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        }).
        when('/showWeights', {
            templateUrl :'views/educator/show.weights.view.html',
            controller :'ShowWeightsCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        }).
        when('/showRating', {
            templateUrl :'views/educator/show.ratings.view.html',
            controller :'ShowRatingCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        }).
        when('/setSleepTime', {
            templateUrl :'views/educator/set.sleeptime.view.html',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
    });
}