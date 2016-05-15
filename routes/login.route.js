angular.module('login').config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl :'views/login.view.html',
                    controller : 'loginCtrl'
        });
}]);