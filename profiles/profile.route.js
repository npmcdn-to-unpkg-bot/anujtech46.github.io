angular.module('profile').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/profile', {
            templateUrl :'profiles/profile.view.html',
            controller : 'profileCtrl'
        }).
        when('/profile/:userid/', {
            templateUrl :'profiles/profile.showProfile.student.view.html'
        }).
        when('/profile/student', {
            templateUrl :'profiles/profile.showProfile.student.view.html'
        }).
        when('/profile/educator', {
            controller : 'showEducatorProfileCtrl',
            templateUrl :'profiles/profile.showProfile.educator.view.html'
        }).
        when('/profile/channelpartner', {
            controller : 'showCPProfileCtrl',
            templateUrl :'profiles/profile.showProfile.cp.view.html'
        }); 
    }
]);