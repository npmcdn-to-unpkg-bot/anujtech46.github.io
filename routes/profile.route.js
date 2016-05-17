angular.module('profile')
        .config(config);

function config($routeProvider) {
    $routeProvider.
        when('/profile', {
            templateUrl :'views/profile/profile.view.html',
            controller : 'ProfileCtrl'
        })
        .when('/profile/:userid/', {
            templateUrl :'views/profile/profile.showProfile.student.view.html'
        }).
        when('/profile/student', {
            templateUrl :'views/profile/profile.showProfile.student.view.html'
        }).
        when('/profile/educator', {
            controller : 'ShowEducatorProfileCtrl',
            templateUrl :'views/profile/profile.showProfile.educator.view.html'
        }).
        when('/profile/channelpartner', {
            controller : 'ShowCPProfileCtrl',
            templateUrl :'views/profile/profile.showProfile.cp.view.html'
        }); 
};