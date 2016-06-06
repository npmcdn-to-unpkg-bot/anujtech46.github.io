angular.module('question')
        .config(config);

function config($routeProvider) {
    $routeProvider.
            when('/maths', {
                templateUrl :'views/question/question.maths.view.html',
                controller :'MQCtrl'
            }).
            when('/science', {
                templateUrl :'views/question/question.science.view.html',
                controller :'SQCtrl'
             }).
            when('/english', {
                templateUrl :'views/question/question.english.view.html',
                controller :'EQCtrl'
            }).
            when('/totalQ', {
                templateUrl :'views/question/question.totalQ.view.html',
                controller :'AQCtrl'
            }).
            when('/repeatUserSessions', {
                templateUrl :'views/question/question.repeatuserssession.view.html',
                controller :'RepeatUserSessionCtrl'
            }).
            when('/getSessions', {
                templateUrl :'views/question/sessions.view.html',
                controller :'AllSessionCtrl'
            }).
            when('/getRatingLT2', {
                templateUrl :'views/question/ratingLT2.view.html',
                controller :'AllRatingLT2Ctrl'
            }).
            when('/getRatingGT4', {
                templateUrl :'views/question/ratingGT4.view.html',
                controller :'AllRatingGT4Ctrl'
            });
};