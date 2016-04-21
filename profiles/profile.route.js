angular.module('profile').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/profile', {
            templateUrl :'profiles/profile.view.html',
            controller : 'profileCtrl'
        }).
        when('/profile/:userid', {
            controller : 'showProfileCtrl',
            templateUrl :'profiles/profile.showProfile.student.view.html'
        }).
        when('/profile/student', {
//            controller : 'showProfileCtrl',
            templateUrl :'profiles/profile.showProfile.student.view'
        }).
        when('/profile/educator', {
//            controller : 'showProfileCtrl',
            templateUrl :'profiles/profile.showProfile.educator.view.html'
        }); 
    }]);