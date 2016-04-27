angular.module('profile').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/profile', {
            templateUrl :'profiles/profile.view.html',
            controller : 'profileCtrl'
        }).
        when('/profile/:userid/:roles', {
            controller : 'showProfileCtrl',
            templateUrl :'profiles/profile.showProfile.student.view.html'
        }).
        when('/profile/student', {
            controller : 'showStudnetProfileCtrl',
            templateUrl :'profiles/profile.showProfile.student.view.html'
        }).
        when('/profile/educator', {
            controller : 'showEducatorProfileCtrl',
            templateUrl :'profiles/profile.showProfile.educator.view.html'
        }); 
    }]);