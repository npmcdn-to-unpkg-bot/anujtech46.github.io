angular.module('channelpartner')
        .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/registerCP', {
            templateUrl :'views/channelpartner/register.channelpartner.view.html',
            controller :'RegisterCPCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/showCP', {
            templateUrl :'views/channelpartner/show.allchannelpartner.view.html',
            controller :'ShowAllCPCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/addAppCredentials', {
            templateUrl :'views/channelpartner/add.app.credentials.view.html',
            controller :'AddAppCredentialsCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/showAppCredentials', {
            templateUrl :'views/channelpartner/show.app.credentials.view.html',
            controller :'ShowAppCredentialsCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/showPartnerAdmin', {
            templateUrl :'views/channelpartner/show.partner.admin.view.html',
            controller :'ShowAllPartnerAdminCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        })
        .when('/addPartnerAdmin', {
            templateUrl :'views/channelpartner/register.partner.admin.view.html',
            controller :'AddPartnerAdminCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        });
    };