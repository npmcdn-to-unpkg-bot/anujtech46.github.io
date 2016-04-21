angular.module('question').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
            
            when('/maths', {
                templateUrl :'question/question.maths.view.html',
                controller :'MQCtrl'
            }).
            when('/science', {
                templateUrl :'question/question.science.view.html',
                controller :'SQCtrl'
             }).
            when('/english', {
                templateUrl :'question/question.english.view.html',
                controller :'EQCtrl'
            }).
            when('/totalQ', {
                templateUrl :'question/question.totalQ.view.html',
                controller :'AQCtrl'
            });
}]);