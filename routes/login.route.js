// login.config.js
angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/avengers', {
            templateUrl :'views/login.view.html',
            controller : 'loginCtrl'
        });
}