// login.config.js
angular
    .module('login')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl :'views/login/login.view.html',
            controller : 'LoginCtrl'
        });
}