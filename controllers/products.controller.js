angular.module('products')
        .controller('AddAwardCtrl', AddAwardCtrl)
        .controller('AddPromoCtrl', AddPromoCtrl)
        .controller('AddVoucherCtrl', AddVoucherCtrl)
        .controller('AddShopCtrl', AddShopCtrl)
        .controller('ShowAwardCtrl', ShowAwardCtrl)
        .controller('ShowPromoCtrl', ShowPromoCtrl)
        .controller('ShowVoucherCtrl', ShowVoucherCtrl)
        .controller('ShowShopCtrl', ShowShopCtrl); 

AddAwardCtrl.$inject = ['$scope', 'productsFactory', 'toastr'];
function AddAwardCtrl($scope, productsFactory, toastr) {
    
    $scope.addAwardProduct = function() {
        
        var data = {
            productidentifier: $scope.award.pi,
            name: $scope.award.pname,
            description: $scope.award.description,
            credits: $scope.award.credits,
            creditsvalidfordays: $scope.award.cvfd,
            availablefor: $scope.award.availablefor
        };

        productsFactory.addAward(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("add award product successfully");
                    $scope.award = '';
                    $scope.update.$setPristine();
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add award product');
                } 
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

AddPromoCtrl.$inject = ['$scope', 'productsFactory', 'toastr'];
function AddPromoCtrl($scope, productsFactory, toastr) {
    
    $scope.addPromoProduct = function() {
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

        productsFactory.addPromo(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("add promo product successfully");
                    $scope.promo = '';
                    $scope.update.$setPristine();
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add promo product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

AddShopCtrl.$inject = ['$scope', 'productsFactory', 'toastr'];
function AddShopCtrl($scope, productsFactory, toastr) {

    $scope.addShopProduct = function() {
      
        var data = {
            productidentifier: $scope.shop.pi,
            name: $scope.shop.pname,
            description: $scope.shop.description,
            credits: $scope.shop.credits,
            creditsvalidfordays: $scope.shop.cvfd,
            availablefor: $scope.shop.availablefor        
        };

        productsFactory.addShop(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("add shop product successfully");
                    $scope.shop = '';
                    $scope.product.$setPristine();
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add shop product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

AddVoucherCtrl.$inject = ['$scope', 'productsFactory', 'toastr'];
function AddVoucherCtrl($scope, productsFactory, toastr) {
    
    $scope.addVoucherProduct = function() {
        
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

        productsFactory.addVoucher(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("add voucher successfully");
                    $scope.voucher = '';
                    $scope.product.$setPristine();
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add voucher product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};;

ShowAwardCtrl.$inject = ['$scope', 'productsFactory', 'toastr'];

function ShowAwardCtrl($scope, productsFactory, toastr) {

    productsFactory.getAward(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.products = res.products;
                $scope.count = res.count;
            } else {
                toastr.error('Invalid Credentials', 'Unable to get award product');
            }
        } else {
            toastr.error('Server not working');
        }
    });
};

ShowPromoCtrl.$inject = ['$scope', 'productsFactory', 'toastr'];

function ShowPromoCtrl($scope, productsFactory, toastr) {

    productsFactory.getPromo(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.products = res.products;
                $scope.count = res.count;
            } else {
                toastr.error('Invalid Credentials', 'Unable to get promo product');
            }
        } else {
            toastr.error('Server not working');
        }
    });
};

ShowShopCtrl.$inject = ['$scope', 'productsFactory', 'toastr'];

function ShowShopCtrl($scope, productsFactory, toastr) {

    productsFactory.getShop(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.products = res.products;
                $scope.count = res.count;
            } else {
                toastr.error('Invalid Credentials', 'Unable to get shop product');
            }
        } else {
            toastr.error('Server not working');
        }
    });
};

ShowVoucherCtrl.$inject = ['$scope', 'productsFactory', 'toastr'];

function ShowVoucherCtrl($scope, productsFactory, toastr) {

    productsFactory.getVoucher(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.products = res.products;
                $scope.count = res.count;
            } else {
                toastr.error('Invalid Credentials', 'Unable to get voucher products');
            }
        } else {
            toastr.error('Server not working');
        }
    });
};