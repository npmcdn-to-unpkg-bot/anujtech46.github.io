// registration.config.js
angular
    .module('registration')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/todayR', {
            templateUrl :'views/registration/registration.todayR.view.html',
            controller : 'TodayRegistrationCtrl'
        })
        .when('/totalR', {
            templateUrl :'views/registration/registration.totalR.view.html',
            controller : 'TotalRegistrationCtrl'
        })
        .when('/tempUser', {
            templateUrl :'views/registration/tempuser.view.html',
            controller : 'TempUserCtrl'
        })
        .when('/devices', {
            templateUrl :'views/registration/device.view.html',
            controller : 'DeviceCtrl'
        })
        .when('/lastActive', {
            templateUrl :'views/registration/lastactiveuser.view.html',
            controller : 'LastActiveUserCtrl'
        });
}