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
        });
    };