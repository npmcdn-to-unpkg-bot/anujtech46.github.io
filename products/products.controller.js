var products = angular.module('products');

products.controller('addAwardCtrl', function($scope, $http, user) {

    $scope.ctrl = 'addAwardCtrl';
    
    $scope.addAwardProduct = function() {
        
        var url = user.apiEndPoint + "product/award";
        var data = {
            productidentifier: $scope.award.pi,
            name: $scope.award.pname,
            description: $scope.award.description,
            credits: $scope.award.credits,
            creditsvalidfordays: $scope.award.cvfd,
            availablefor: $scope.award.availablefor
        };
        var config = {
            headers : {
                token : user.token
            }
        };

        $http.post(url, data, config).then(function(res, err) {
            if(res.data.code === 303000) {
                $scope.message = "Promo product added successfully";
                $scope.hideform = true;
            } if(err) {
                $scope.err = err;
            }
        });
    };
});

products.controller('addPromoCtrl', function($scope, $http, user) {
    
    $scope.addPromoProduct = function() {
        
        var url = user.apiEndPoint + "product/promo";
        var data = {
            productidentifier: $scope.promo.pi,
            name: $scope.promo.pname,
            description: $scope.promo.description,
            credits: $scope.promo.credits,
            creditsvalidfordays: $scope.promo.cvfd,
            code: $scope.promo.code,
            usagecount: $scope.promo.usagecount,
            availablefor: $scope.promo.availablefor
        };
        var config = {
            headers : {
                token : user.token
            }
        };

        $http.post(url, data, config).then(function(res, err) {
            if(res.data.code === 303000) {
                $scope.message = "Promo product added successfully";
                $scope.hideform = true;
            } if(err) {
                $scope.err = err;
            }
        });
    };
});

products.controller('addShopCtrl', function($scope, $http, user) {

    $scope.addShopProduct = function() {
        
        var url = user.apiEndPoint + "product/shop";
        var data = {
            productidentifier: $scope.shop.pi,
            name: $scope.shop.pname,
            description: $scope.shop.description,
            credits: $scope.shop.credits,
            creditsvalidfordays: $scope.shop.cvfd,
            availablefor: $scope.shop.availablefor        
        };
        var config = {
            headers : {
                token : user.token
            }
        };

        $http.post(url, data, config).then(function(res, err) {
            if(res.data.status === 303000) {
                $scope.message = "shop product added successfully";
                $scope.hideform = true;
            } if(err) {
                $scope.err = err;
            }
        });
    };
});

products.controller('addVoucherCtrl', function($scope, $http, user) {
    
    $scope.addVoucherProduct = function() {
        
        var url = user.apiEndPoint + "product/voucher";
        var data = {
            productidentifier: $scope.voucher.pi,
            name: $scope.voucher.pname,
            description: $scope.voucher.description,
            credits: $scope.voucher.credits,
            creditsvalidfordays: $scope.voucher.cvfd,
            code: $scope.voucher.code,
            codemajor: $scope.voucher.codemajor,
            codeminor: $scope.voucher.codeminor,
            usagecount: $scope.voucher.usagecount,
            availablefor: $scope.voucher.availablefor
        };
        var config = {
            headers : {
                token : user.token
            }
        };

        $http.get(url, data, config).then(function(res, err) {
            if(res.data.code === 303000) {
                $scope.message = "Voucher product added successfully";
                $scope.hideform = true;
            } if(err) {
                $scope.err = err;
            }
        });
    };
});

products.controller('showAwardCtrl', function($scope, $http, user) {

    var url = user.apiEndPoint + "product/award";
    var config = {
        headers : {
            token : user.token
        }
    };
    
    $http.get(url, config).then(function(res, err) {
        if(res) {
            $scope.promos = res.data.totalPromo;
            $scope.count = res.data.count;
        } if(err) {
            $scope.err = err;
        }
    });
    
});

products.controller('showPromoCtrl', function($scope, $http, user) {
    
    var url = user.apiEndPoint + "product/promo";
    var config = {
        headers : {
            token : user.token
        }
    };
    
    $http.get(url, config).then(function(res, err) {
        if(res) {
            $scope.promos = res.data.totalPromo;
            $scope.count = res.data.count;
        } if(err) {
            $scope.err = err;
        }
    });
    
});

products.controller('showShopCtrl', function($scope, $http, user) {

    var url = user.apiEndPoint + "product/shop";
    var config = {
        headers : {
            token : user.token
        }
    };
    
    $http.get(url, config).then(function(res, err) {
        if(res) {
            $scope.shops = res.data.totalShop;
            $scope.count = res.data.count;
        } if(err) {
            $scope.err = err;
        }
    });
    
});

products.controller('showVoucherCtrl', function($scope, $http, user) {
    
    var url = user.apiEndPoint + "product/voucher";
    var config = {
        headers : {
            token : user.token
        }
    };
    
    $http.get(url, config).then(function(res, err) {
        if(res) {
            $scope.vouchers = res.data.totalVoucher;
            $scope.count = res.data.count;
        } if(err) {
            $scope.err = err;
        }
    });
    
});
