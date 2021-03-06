/*
 * @file    : products.controller.js
 * @author  : Anuj Gupta
 * @desc    : functionality of products 
 */

/*
 * imports products module
 */
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
        .controller('UpdateAwardCtrl', UpdateAwardCtrl)
        .controller('UpdatePromoCtrl', UpdatePromoCtrl)
        .controller('UpdateShopCtrl', UpdateShopCtrl)
        .controller('UpdateVoucherCtrl', UpdateVoucherCtrl);

/*
 * @desc    : Add new award product
 * @name    : AddAwardCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, $location
 */
AddAwardCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location'];
function AddAwardCtrl($scope, productsFactory, toastr, $location) {
    
    $scope.addAwardProduct = function() {
        
        var data = {
            productidentifier: $scope.award.pi,
            studentpartnerid : $scope.award.spid,
            name: $scope.award.pname,
            description: $scope.award.description,
            credits: $scope.award.credits,
            creditsvalidfordays: $scope.award.cvfd,
            creditvalidity: $scope.award.pvfd,
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

/*
 * @desc    : Add new promo product
 * @name    : AddPromoCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, $location
 */
AddPromoCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location'];
function AddPromoCtrl($scope, productsFactory, toastr, $location) {
    
    $scope.addPromoProduct = function() {
        var data = {
            productidentifier: $scope.promo.pi,
            studentpartnerid : $scope.promo.spid,
            name: $scope.promo.pname,
            description: $scope.promo.description,
            credits: $scope.promo.credits,
            creditsvalidfordays: $scope.promo.cvfd,
            creditvalidity: $scope.promo.pvfd,
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

/*
 * @desc    : Add new Shop product
 * @name    : AddShopCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, $location
 */
AddShopCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location'];
function AddShopCtrl($scope, productsFactory, toastr, $location) {

    $scope.addShopProduct = function() {
      
        var data = {
            productidentifier: $scope.shop.pi,
            studentpartnerid : $scope.shop.spid,
            name: $scope.shop.pname,
            description: $scope.shop.description,
            credits: $scope.shop.credits,
            creditsvalidfordays: $scope.shop.cvfd,
            creditvalidity: $scope.shop.pvfd,
            availablefor: $scope.shop.availablefor        
        };

        productsFactory.addShop(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("add shop product successfully");
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

/*
 * @desc    : Add new Voucher product, first get the code of channel partner after that we add new product.
 * @name    : AddVoucherCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, cpProfileService, $location
 */
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
            studentpartnerid : $scope.voucher.spid,
            name: $scope.voucher.pname,
            description: $scope.voucher.description,
            credits: $scope.voucher.credits,
            creditsvalidfordays: $scope.voucher.cvfd,
            creditvalidity: $scope.voucher.pvfd,
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

/*
 * @desc    : Add new Voucher product, first get the code of channel partner after that we add new product.
 * @name    : ShowAwardCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, cpProfileService, $location
 */
ShowAwardCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location', 'productService'];

function ShowAwardCtrl($scope, productsFactory, toastr, $location, productService) {

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
    
    $scope.addAwardProduct = addAwardProduct;
    function addAwardProduct() {
        $location.path('/addAward');
    }
    
    $scope.updateAwardProduct = updateAwardProduct;
    function updateAwardProduct(productidentifier) {
        productService.saveProductIdentifier(productidentifier);
        $location.path('/updateAward');
    }
    
    $scope.deleteAwardProduct = deleteAwardProduct;
    function deleteAwardProduct(productidentifier) {
        var x = confirm("Are you sure you want to delete?");
        if(x) { 
            productsFactory.deleteAward(productidentifier, function(err, res) {
                if(res) {
                    if(res.status.code === 303000) {
                        toastr.success("delete award product successfully");
                        productsFactory.getAward(function(err, res) {
                            if(res) {
                                if(res.status.code === 303000) {
                                    $scope.products = res.products;
                                    $scope.count = res.count;
                                } else {
                                    toastr.error('Invalid Credentials', 'Unable to delete award product');
                                }
                            } else {
                                toastr.error('Server not working');
                            }
                        });
                    } else {
                        toastr.error('Invalid Credentials', 'Unable to get award product');
                    }
                } else {
                    toastr.error('Server not working');
                }
            });
        } else { 
            $location.path('/showAward');
            return false;
        }
    }
};

/*
 * @desc    : show all promo product.
 * @name    : ShowPromoCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, $location, productService
 */
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
                        toastr.error('Invalid Credentials', 'Unable to delete promo product');
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

/*
 * @desc    : show all shop product.
 * @name    : ShowShopCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, $location, productService
 */
ShowShopCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location', 'productService'];

function ShowShopCtrl($scope, productsFactory, toastr, $location, productService) {

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
    
    $scope.addShopProduct = addShopProduct;
    function addShopProduct() {
        $location.path('/addShop');
    }
    $scope.updateShopProduct = updateShopProduct;
    function updateShopProduct(productidentifier) {
        productService.saveProductIdentifier(productidentifier);
        $location.path('/updateShop');
    }
    
    $scope.deleteShopProduct = deleteShopProduct;
    function deleteShopProduct(productidentifier) {
        var x = confirm("Are you sure you want to delete?");
        if(x) { 
            productsFactory.deleteShop(productidentifier, function(err, res) {
                if(res) {
                    if(res.status.code === 303000) {
                        toastr.success("delete successfully");
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
                    } else {
                        toastr.error('Invalid Credentials', 'Unable to delete shop product');
                    }
                } else {
                    toastr.error('Server not working');
                }
            });
        } else { 
            $location.path('/showShop');
            return false;
        }
    }
};

/*
 * @desc    : show all voucher product.
 * @name    : ShowVoucherCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, $location, productService
 */
ShowVoucherCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location', 'productService'];

function ShowVoucherCtrl($scope, productsFactory, toastr, $location, productService) {

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
    
    
    $scope.addVoucherProduct = addVoucherProduct;
    function addVoucherProduct() {
        $location.path('/addVoucher');
    }
    $scope.updateVoucherProduct = updateVoucherProduct;
    function updateVoucherProduct(productidentifier) {
        productService.saveProductIdentifier(productidentifier);
        $location.path('/updateVoucher');
    }
    
    $scope.deleteVoucherProduct = deleteVoucherProduct;
    function deleteVoucherProduct(productidentifier) {
        var x = confirm("Are you sure you want to delete?");
        if(x) { 
            productsFactory.deleteVoucher(productidentifier, function(err, res) {
                if(res) {
                    if(res.status.code === 303000) {
                        toastr.success("delete successfully");
                        productsFactory.getVoucher(function(err, res) {
                            if(res) {
                                if(res.status.code === 303000) {
                                    $scope.products = res.products;
                                    $scope.count = res.count;
                                } else {
                                    toastr.error('Invalid Credentials', 'Unable to get voucher product');
                                }
                            } else {
                                toastr.error('Server not working');
                            }
                        });
                    } else {
                        toastr.error('Invalid Credentials', 'Unable to delete voucher product');
                    }
                } else {
                    toastr.error('Server not working');
                }
            });
        } else { 
            $location.path('/showVoucher');
            return false;
        }
    }
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

/*
 * @desc    : Update the award product first fetch update product identifier, show data to admin,
 *            admin update the required field, after that take updated data and update the product.
 * @name    : UpdateAwardCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, $location, productService
 */
UpdateAwardCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location', 'productService'];
function UpdateAwardCtrl($scope, productsFactory, toastr, $location, productService) {
    
    var productidentifier = productService.getProductIdentifier();
    if(!productidentifier) {
        toastr.error('Invalid Credentials');
        return ;
    }
    
    productsFactory.getAwardProductByID(productidentifier, function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.award = {
                    pi: productidentifier,
                    spid: res.award.studentpartnerid,
                    pname: res.award.name,
                    description: res.award.description,
                    credits: res.award.credits,
                    cvfd : res.award.creditsvalidfordays,
                    creditvalidity : res.award.creditvalidity,
                    expiry: res.award.expired,
                    code: res.award.code,
                    usagecount: res.award.usagecount,
                    availablefor: res.award.availablefor
                };
            } else {
                toastr.error('Invalid Credentials', 'Unable to get award product');
                return ;
            }
        } else {
            toastr.error('Server not working');
            return ;
        }
    });
    
    $scope.updateAwardProduct = updateAwardProduct;
    function updateAwardProduct() {
        var data = {
            productidentifier: $scope.award.pi
        };
        if($scope.award.pname) {
            data.name = $scope.award.pname;
        }
        if($scope.award.description) {
            data.description = $scope.award.description;
        }
        if($scope.award.credits) {
            data.credits = $scope.award.credits;
        }
        if($scope.award.cvfd) {
            data.creditsvalidfordays = $scope.award.cvfd;
        }
        if($scope.award.expiry) {
            data.expired = $scope.award.expiry;
        }
        if($scope.award.evfd) {
            data.extendValidity = $scope.award.evfd;
            data.creditvalidity = $scope.award.creditvalidity + $scope.award.evfd;
        }
        if($scope.award.availablefor) {
            data.availablefor = $scope.award.availablefor;
        }
        
        productsFactory.updateAward(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("add award product successfully");
                    $location.path('/showAward');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to update award product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

/*
 * Update the promo product first fetch update product identifier, show data to admin,
 * admin update the required field, after that take updated data and update the product.
 * @name    : UpdatePromoCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, $location, productService
 */
UpdatePromoCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location', 'productService'];
function UpdatePromoCtrl($scope, productsFactory, toastr, $location, productService) {
    
    var productidentifier = productService.getProductIdentifier();
    if(!productidentifier) {
        toastr.error('Invalid Credentials');
        return ;
    }
    productsFactory.getPromoProductByID(productidentifier, function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.promo = {
                    pi: productidentifier,
                    spid: res.promo.studentpartnerid,
                    pname: res.promo.name,
                    description: res.promo.description,
                    credits: res.promo.credits,
                    cvfd : res.promo.creditsvalidfordays,
                    creditvalidity : res.promo.creditvalidity,
                    expiry: res.promo.expired,
                    code: res.promo.code,
                    usagecount: res.promo.usagecount,
                    availablefor: res.promo.availablefor
                };
            } else {
                toastr.error('Invalid Credentials', 'Unable to get promo product');
                return ;
            }
        } else {
            toastr.error('Server not working');
            return ;
        }
    });
    
    $scope.updatePromoProduct = updatePromoProduct;
    function updatePromoProduct() {
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
        if($scope.promo.cvfd) {
            data.creditsvalidfordays = $scope.promo.cvfd;
        }
        if($scope.promo.evfd) {
            data.extendValidity = $scope.promo.evfd;
            data.creditvalidity = $scope.promo.creditvalidity + $scope.promo.evfd;
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
                    toastr.error('Invalid Credentials', 'Unable to update promo product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

/*
 * Update the shop product first fetch update product identifier, show data to admin,
 * admin update the required field, after that take updated data and update the product.
 * @name    : UpdatePromoCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, $location, productService
 */
UpdateShopCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location', 'productService'];
function UpdateShopCtrl($scope, productsFactory, toastr, $location, productService) {
    
    var productidentifier = productService.getProductIdentifier();
    if(!productidentifier) {
        toastr.error('Invalid Credentials');
        return ;
    }
    productsFactory.getShopProductByID(productidentifier, function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.shop = {
                    pi: productidentifier,
                    spid: res.shop.studentpartnerid,
                    pname: res.shop.name,
                    description: res.shop.description,
                    credits: res.shop.credits,
                    cvfd : res.shop.creditsvalidfordays,
                    creditvalidity : res.shop.creditvalidity,
                    expiry: res.shop.expired,
                    availablefor: res.shop.availablefor
                };
            } else {
                toastr.error('Invalid Credentials', 'Unable to get shop product');
                return ;
            }
        } else {
            toastr.error('Server not working');
            return ;
        }
    });
    
    $scope.updateShopProduct = updateShopProduct;
    function updateShopProduct() {
        var data = {
            productidentifier: $scope.shop.pi
        };
        if($scope.shop.pname) {
            data.name = $scope.shop.pname;
        }
        if($scope.shop.description) {
            data.description = $scope.shop.description;
        }
        if($scope.shop.credits) {
            data.credits = $scope.shop.credits;
        }
        if($scope.shop.cvfd) {
            data.creditsvalidfordays = $scope.shop.cvfd;
        }
        if($scope.shop.evfd) {
            data.extendValidity = $scope.shop.evfd;
            data.creditvalidity = $scope.shop.creditvalidity + $scope.shop.evfd;
        }
        if($scope.shop.expiry) {
            data.expired = $scope.shop.expiry;
        }
        if($scope.shop.availablefor) {
            data.availablefor = $scope.shop.availablefor;
        }        
        productsFactory.updateShop(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("add shop product successfully");
                    $location.path('/showShop');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to update shop product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};
/*
 * Update the voucher product first fetch update product identifier, show data to admin,
 * admin update the required field, after that take updated data and update the product.
 * @name    : UpdateVocherCtrl
 * @author  : Anuj Gupta
 * @params  : $scope, productsFactory, toastr, $location, productService
 */
UpdateVoucherCtrl.$inject = ['$scope', 'productsFactory', 'toastr', '$location', 'productService'];
function UpdateVoucherCtrl($scope, productsFactory, toastr, $location, productService) {
    
    var productidentifier = productService.getProductIdentifier();
    if(!productidentifier) {
        toastr.error('Invalid Credentials');
        return ;
    }
    productsFactory.getVoucherProductByID(productidentifier, function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.voucher = {
                    pi: productidentifier,
                    spid: res.voucher.studentpartnerid,
                    pname: res.voucher.name,
                    description: res.voucher.description,
                    credits: res.voucher.credits,
                    code: res.voucher.code,
                    codemajor: res.voucher.codemajor,
                    codeminor: res.voucher.codeminor,
                    cvfd : res.voucher.creditsvalidfordays,
                    creditvalidity : res.voucher.creditvalidity,
                    expiry: res.voucher.expired,
                    usagecount: res.voucher.usagecount,
                    availablefor: res.voucher.availablefor
                };
            } else {
                toastr.error('Invalid Credentials', 'Unable to get voucher product');
                return ;
            }
        } else {
            toastr.error('Server not working');
            return ;
        }
    });
    
    $scope.updateVoucherProduct = updateVoucherProduct;
    function updateVoucherProduct() {
        var data = {
            productidentifier: $scope.voucher.pi
        };
        if($scope.voucher.pname) {
            data.name = $scope.voucher.pname;
        }
        if($scope.voucher.description) {
            data.description = $scope.voucher.description;
        }
        if($scope.voucher.credits) {
            data.credits = $scope.voucher.credits;
        }
        if($scope.voucher.cvfd) {
            data.creditsvalidfordays = $scope.voucher.cvfd;
        }
        if($scope.voucher.evfd) {
            data.extendValidity = $scope.voucher.evfd;
        }
        if($scope.voucher.expiry) {
            data.expired = $scope.voucher.expiry;
            data.creditvalidity = $scope.voucher.creditvalidity + $scope.voucher.evfd;
        }
        if($scope.voucher.availablefor) {
            data.availablefor = $scope.voucher.availablefor;
        }        
        productsFactory.updateVoucher(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("update voucher product successfully");
                    $location.path('/showVoucher');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to update voucher product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};