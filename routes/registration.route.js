// registration.config.js

    angular.module('registration')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/todayR', {
            templateUrl :'views/registration/registration.todayR.view.html',
            controller : 'TodayRegistrationCtrl',
            resolve:{loggedIn:'onlyLoggedIn'
            }
        })
        .when('/totalR', {
            templateUrl :'views/registration/registration.totalR.view.html',
            controller : 'TotalRegistrationCtrl',
            resolve:{loggedIn:'onlyLoggedIn'
            }
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
        })
        .when('/lastDayActiveUser', {
            templateUrl :'views/registration/repeatUser.view.html',
            controller : 'RepeatUserCtrl'
        })
        .when('/AllUserProfileLocation', {
            templateUrl :'views/registration/allProfile.view.html',
            controller : 'AllProfileCtrl'
        })
        .when('/AllUserIPAddress', {
            templateUrl :'views/registration/allIP.view.html',
            controller : 'AllIPCtrl'
        });
}