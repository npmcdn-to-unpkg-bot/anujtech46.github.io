// registration.config.js

    angular.module('registration')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/todayR', {
            templateUrl :'views/registration/registration.todayR.view.html',
            controller : 'TodayRegistrationCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/totalR', {
            templateUrl :'views/registration/registration.totalR.view.html',
            controller : 'TotalRegistrationCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/tempUser', {
            templateUrl :'views/registration/tempuser.view.html',
            controller : 'TempUserCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/devices', {
            templateUrl :'views/registration/device.view.html',
            controller : 'DeviceCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/lastActive', {
            templateUrl :'views/registration/lastactiveuser.view.html',
            controller : 'LastActiveUserCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/lastDayActiveUser', {
            templateUrl :'views/registration/repeatUser.view.html',
            controller : 'RepeatUserCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/AllUserProfileLocation', {
            templateUrl :'views/registration/allProfile.view.html',
            controller : 'AllProfileCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/AllUserIPAddress', {
            templateUrl :'views/registration/allIP.view.html',
            controller : 'AllIPCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        });
}