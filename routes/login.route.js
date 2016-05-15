angular.module('login').config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl :'login/login.view.html',
                    controller : 'loginCtrl'
        });
}]);