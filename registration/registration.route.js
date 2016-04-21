angular.module('registration').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
            
            when('/today', {
                templateUrl :'registration/registration.todayR.view.html',
                controller :'todayRegistrationCtrl'
            }).
            when('/totalR', {
                templateUrl :'registration/registration.totalR.view.html',
                controller :'totalRegistrationCtrl'
            }).
            when('/tempUser', {
                templateUrl :'registration/tempuser.view.html',
                controller :'tempUserCtrl'
        });
}]);