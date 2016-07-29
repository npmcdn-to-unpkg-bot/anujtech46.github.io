angular.module('question')
        .config(config);

function config($routeProvider) {
    $routeProvider.
            when('/maths', {
                templateUrl :'views/question/question.maths.view.html',
                controller :'MQCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/science', {
                templateUrl :'views/question/question.science.view.html',
                controller :'SQCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
             }).
            when('/english', {
                templateUrl :'views/question/question.english.view.html',
                controller :'EQCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/totalQ', {
                templateUrl :'views/question/question.totalQ.view.html',
                controller :'AQCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/repeatUserSessions', {
                templateUrl :'views/question/question.repeatuserssession.view.html',
                controller :'RepeatUserSessionCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/getRequestedSessions', {
                templateUrl :'views/question/requested.session.view.html',
                controller :'AllRequestedSessionCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/getStartedSessions', {
                templateUrl :'views/question/sessions.view.html',
                controller :'AllStartedSessionCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/getRatingLT2', {
                templateUrl :'views/question/ratingLT2.view.html',
                controller :'AllRatingLT2Ctrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/getRatingGT4', {
                templateUrl :'views/question/ratingGT4.view.html',
                controller :'AllRatingGT4Ctrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            });
};