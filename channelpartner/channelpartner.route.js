angular.module('channelpartner').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
            
            when('/registerCP', {
                templateUrl :'channelpartner/register.channelpartner.view.html',
                controller :'registerCP'
            });
}]);