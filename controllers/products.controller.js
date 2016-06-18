angular.module('products')
        .controller('AddAwardCtrl', AddAwardCtrl)
        .controller('AddPromoCtrl', AddPromoCtrl)
        .controller('AddVoucherCtrl', AddVoucherCtrl)
        .controller('AddShopCtrl', AddShopCtrl)
        .controller('ShowAwardCtrl', ShowAwardCtrl)
        .controller('ShowPromoCtrl', ShowPromoCtrl)
        .controller('ShowVoucherCtrl', ShowVoucherCtrl)
        .controller('ShowShopCtrl', ShowShopCtrl)
        .controller('ShowPurchaseCtrl', ShowPurchaseCtrl)
        .controller('ShowReferralCodeCtrl', ShowReferralCodeCtrl)
        .controller('UpdatePromoCtrl', UpdatePromoCtrl);

AddAwardCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location'];
function AddAwardCtrl($scope, productsFactory, toastr, $location) {
    
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
                    $location.path('/showAward');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add award product');
                } 
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

AddPromoCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location'];
function AddPromoCtrl($scope, productsFactory, toastr, $location) {
    
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
                    $location.path('/showPromo');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add promo product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

AddShopCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location'];
function AddShopCtrl($scope, productsFactory, toastr, $location) {

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
                    $location.path('/showShop');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add shop product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

AddVoucherCtrl.$inject = ['$scope', 'productsFactory', 'toastr', 'cpProfileService', '$location'];
function AddVoucherCtrl($scope, productsFactory, toastr, cpProfileService, $location) {
    
    var cpCode = cpProfileService.getCPCode();
    $scope.voucher = {
        code : cpCode
    };
    
    $scope.institute = cpProfileService.getInstitute();
    
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
                    $location.path('/showVoucher');
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

ShowPromoCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location', 'productService'];

function ShowPromoCtrl($scope, productsFactory, toastr, $location, productService) {

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
    
    $scope.addPromoProduct = addPromoProduct;
    function addPromoProduct() {
        $location.path('/addPromo');
    }
    
    $scope.updatePromoProduct = updatePromoProduct;
    function updatePromoProduct(productidentifier) {
        productService.saveProductIdentifier(productidentifier);
        $location.path('/updatePromo');
    }
    
    $scope.deletePromoProduct = deletePromoProduct;
    function deletePromoProduct(productidentifier) {
        var x = confirm("Are you sure you want to delete?");
        if(x) { 
            productsFactory.deletePromo(productidentifier, function(err, res) {
                if(res) {
                    if(res.status.code === 303000) {
                        toastr.success("delete promo successfully");
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
                    } else {
                        toastr.error('Invalid Credentials', 'Unable to add voucher product');
                    }
                } else {
                    toastr.error('Server not working');
                }
            });
        } else { 
            $location.path('/showPromo');
            return false;
        }
    }
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

ShowPurchaseCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location'];

function ShowPurchaseCtrl($scope, productsFactory, toastr, $location) {
    
    $scope.getProfiles = getProfiles;

    productsFactory.getPurchaseProduct(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                if(res.count === 0) {
                    $scope.count = res.count;
                    $scope.hidetable = true;
                    return;
                }
                $scope.products = res.products;
                $scope.count = res.count;
            } else {
                toastr.error('Invalid Credentials', 'Unable to get purchase products');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    function getProfiles(userid) {
        $location.path('/profile/student/'+userid);
    }
};

ShowReferralCodeCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location', '$log', 'PagerService'];

function ShowReferralCodeCtrl($scope, productsFactory, toastr, $location, $log, PagerService) {
    
    $scope.getProfiles = getProfiles;

    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.getProfiles = getProfiles;
    
    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        productsFactory.getReferralCode(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.referralcodes.referralcode);
                    $scope.pager = PagerService.GetPager(res.referralcodes.count, page, res.referralcodes.pageSize);
                    $scope.referralcodes =  res.referralcodes.referralcode;
                    $scope.count = res.referralcodes.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
    
    function getProfiles(userid) {
        $location.path('/profile/student/'+userid);
    }
};

UpdatePromoCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location', 'productService'];
function UpdatePromoCtrl($scope, productsFactory, toastr, $location, productService) {
    
    var productidentifier = productService.getProductIdentifier();
    if(!productidentifier) {
        toastr.error('Invalid Credentials', 'Unable to add promo product');
        return ;
    }
    productsFactory.getPromoProductByID(productidentifier, function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.promo = {
                    pi: productidentifier,
                    pname: res.promo.name,
                    description: res.promo.description,
                    credits: res.promo.credits,
                    expiry: res.promo.expired,
                    code: res.promo.code,
                    usagecount: res.promo.usagecount,
                    availablefor: res.promo.availablefor
                };
            } else {
                toastr.error('Invalid Credentials', 'Unable to add promo product');
                return ;
            }
        } else {
            toastr.error('Server not working');
            return ;
        }
    });
    
    $scope.updatePromoProduct = function() {
        var data = {
            productidentifier: $scope.promo.pi
        };
        if($scope.promo.pname) {
            data.name = $scope.promo.pname;
        }
        if($scope.promo.description) {
            data.description = $scope.promo.description;
        }
        if($scope.promo.credits) {
            data.credits = $scope.promo.credits;
        }
        if($scope.promo.pefd) {
            data.extendValidity = $scope.promo.pefd;
        }
        if($scope.promo.expiry) {
            data.expired = $scope.promo.expiry;
        }
        if($scope.promo.code) {
            data.code = $scope.promo.code;
        }
        if($scope.promo.usagecount) {
            data.usagecount = $scope.promo.usagecount;
        }
        if($scope.promo.availablefor) {
            data.availablefor = $scope.promo.availablefor;
        }
        
        productsFactory.updatePromo(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("add promo product successfully");
                    $location.path('/showPromo');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add promo product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};