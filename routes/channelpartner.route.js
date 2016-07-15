angular.module('channelpartner')
        .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/registerCP', {
            templateUrl :'views/channelpartner/register.channelpartner.view.html',
            controller :'RegisterCPCtrl'
        })
        .when('/showCP', {
            templateUrl :'views/channelpartner/show.allchannelpartner.view.html',
            controller :'ShowAllCPCtrl'
        })
        .when('/showPartner', {
            templateUrl :'views/channelpartner/show.partner.app.view.html',
            controller :'ShowAllPartnerAPPCtrl'
        })
        .when('/addPartnerApp', {
            templateUrl :'views/channelpartner/add.partner.app.view.html',
            controller :'AddPartnerAPPCtrl'
        })
        .when('/updatePartnerApp', {
            templateUrl :'views/channelpartner/update.partner.app.view.html',
            controller :'UpdatePartnerAPPCtrl'
        });
    };