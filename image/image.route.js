angular.module('image').config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/picUpload', {
                    templateUrl :'image/image.view.html',
                    controller : 'imageCtrl'
        });
}]);