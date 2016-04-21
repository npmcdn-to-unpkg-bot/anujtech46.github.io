angular.module('products').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
            
            when('/addAward', {
                templateUrl :'products/addAward.product.view.html',
                controller :'addAwardCtrl'
            }).
            when('/addPromo', {
                templateUrl :'products/addPromo.product.view.html',
                controller :'addPromoCtrl'
            }).
            when('/addShop', {
                templateUrl :'products/addShop.product.view.html',
                controller :'addShopCtrl'
            }).
            when('/addVoucher', {
                templateUrl :'products/addVoucher.product.view.html',
                controller :'addVoucherCtrl'
            }).
            when('/showAward', {
                templateUrl :'products/showAward.product.view.html',
                controller :'showAwardCtrl'
            }).
            when('/showPromo', {
                templateUrl :'products/showPromo.product.view.html',
                controller :'showPromoCtrl'
            }).
            when('/showShop', {
                templateUrl :'products/showShop.product.view.html',
                controller :'showShopCtrl'
            }).
            when('/showVoucher', {
                templateUrl :'products/showVoucher.product.view.html',
                controller :'showVoucherCtrl'
        });
}]);