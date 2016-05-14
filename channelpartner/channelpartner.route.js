angular.module('channelpartner').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
            
        when('/registerCP', {
            templateUrl :'channelpartner/register.channelpartner.view.html',
            controller :'registerCP'
        }).
        when('/showCP', {
            templateUrl :'channelpartner/show.channelpartner.view.html',
            controller :'showCP'
        }).
        when('/try', {
            templateUrl :'channelpartner/try.html'
        });
    }
]);