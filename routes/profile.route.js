angular.module('profile')
        .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/profile', {
            controller : 'ProfileCtrl',
            templateUrl :'views/profile/profile.view.html'
        })
        .when('/profile/student/:userid', {
            controller : 'ShowStudentProfileCtrl',
            templateUrl :'views/profile/profile.showProfile.student.view.html'
        })
        .when('/profile/educator/:userid', {
            controller : 'ShowEducatorProfileCtrl',
            templateUrl :'views/profile/profile.showProfile.educator.view.html'
        }).
        when('/profile/channelpartner/:userid', {
            controller : 'ShowCPProfileCtrl',
            templateUrl :'views/profile/profile.showProfile.cp.view.html'
        }); 
};