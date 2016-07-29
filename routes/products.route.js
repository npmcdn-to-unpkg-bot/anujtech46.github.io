angular.module('products')
        .config(config);

function config($routeProvider) {
    $routeProvider.
            
        when('/addAward', {
            templateUrl :'views/products/addAward.product.view.html',
            controller :'AddAwardCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/addPromo', {
            templateUrl :'views/products/addPromo.product.view.html',
            controller :'AddPromoCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/addShop', {
            templateUrl :'views/products/addShop.product.view.html',
            controller :'AddShopCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/addVoucher', {
            templateUrl :'views/products/addVoucher.product.view.html',
            controller :'AddVoucherCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/showAward', {
            templateUrl :'views/products/showAward.product.view.html',
            controller :'ShowAwardCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/showPromo', {
            templateUrl :'views/products/showPromo.product.view.html',
            controller :'ShowPromoCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/showShop', {
            templateUrl :'views/products/showShop.product.view.html',
            controller :'ShowShopCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/showVoucher', {
            templateUrl :'views/products/showVoucher.product.view.html',
            controller :'ShowVoucherCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/showPurchase', {
            templateUrl :'views/products/purchase.product.view.html',
            controller :'ShowPurchaseCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/showReferralCode', {
            templateUrl :'views/products/product.referralCode.view.html',
            controller :'ShowReferralCodeCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/updateAward', {
            templateUrl :'views/products/updateAward.product.view.html',
            controller :'UpdateAwardCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/updatePromo', {
            templateUrl :'views/products/updatePromo.product.view.html',
            controller :'UpdatePromoCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/updateShop', {
            templateUrl :'views/products/updateShop.product.view.html',
            controller :'UpdateShopCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        }).
        when('/updateVoucher', {
            templateUrl :'views/products/updateVoucher.product.view.html',
            controller :'UpdateVoucherCtrl',
            resolve : {
                loggedin : function(apiService) {
                    return apiService.onlyLoggedIn();
                }
            }
        });
    };