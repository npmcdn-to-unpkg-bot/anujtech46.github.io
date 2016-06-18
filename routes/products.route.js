angular.module('products')
        .config(config);

function config($routeProvider) {
    $routeProvider.
            
            when('/addAward', {
                templateUrl :'views/products/addAward.product.view.html',
                controller :'AddAwardCtrl'
            }).
            when('/addPromo', {
                templateUrl :'views/products/addPromo.product.view.html',
                controller :'AddPromoCtrl'
            }).
            when('/addShop', {
                templateUrl :'views/products/addShop.product.view.html',
                controller :'AddShopCtrl'
            }).
            when('/addVoucher', {
                templateUrl :'views/products/addVoucher.product.view.html',
                controller :'AddVoucherCtrl'
            }).
            when('/showAward', {
                templateUrl :'views/products/showAward.product.view.html',
                controller :'ShowAwardCtrl'
            }).
            when('/showPromo', {
                templateUrl :'views/products/showPromo.product.view.html',
                controller :'ShowPromoCtrl'
            }).
            when('/showShop', {
                templateUrl :'views/products/showShop.product.view.html',
                controller :'ShowShopCtrl'
            }).
            when('/showVoucher', {
                templateUrl :'views/products/showVoucher.product.view.html',
                controller :'ShowVoucherCtrl'
            }).
            when('/showPurchase', {
                templateUrl :'views/products/purchase.product.view.html',
                controller :'ShowPurchaseCtrl'
            }).
            when('/showReferralCode', {
                templateUrl :'views/products/product.referralCode.view.html',
                controller :'ShowReferralCodeCtrl'
            }).
            when('/updatePromo', {
                templateUrl :'views/products/updatePromo.product.view.html',
                controller :'UpdatePromoCtrl'
            });
};