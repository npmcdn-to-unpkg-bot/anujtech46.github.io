// question.service.js

    angular.module('products')
    .factory('productsFactory', productsFactory)
    .service('productService', productService);
    
productsFactory.$inject = ['apiService'];

function productsFactory(apiService) {
    
    var factory = {
        addAward                : addAward,
        addPromo                : addPromo,
        addShop                 : addShop,
        addVoucher              : addVoucher,
        getAward                : getAward,
        getPromo                : getPromo,
        getShop                 : getShop,
        getVoucher              : getVoucher,
        getPurchaseProduct      : getPurchaseProduct,
        getReferralCode         : getReferralCode,
        getAwardProductByID     : getAwardProductByID,
        getPromoProductByID     : getPromoProductByID,
        getShopProductByID      : getShopProductByID,
        getVoucherProductByID   : getVoucherProductByID,
        updateAward             : updateAward,
        updatePromo             : updatePromo,
        updateShop              : updateShop,
        updateVoucher           : updateVoucher,
        deleteAward             : deleteAward,
        deletePromo             : deletePromo,
        deleteShop              : deleteShop,
        deleteVoucher           : deleteVoucher
    };
    
    function addAward(data, callback) {
        
        var url = apiService.getApiEndPoint() + "product/award" ;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doPost(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    function addPromo(data, callback) {
        
        var url = apiService.getApiEndPoint() + "product/promo" ;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doPost(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function addShop(data, callback) {
        
        var url = apiService.getApiEndPoint() + "product/shop" ;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doPost(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    function addVoucher(data, callback) {
        
        var url = apiService.getApiEndPoint() + "product/voucher" ;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doPost(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getAward(callback) {
        
        var url = apiService.getApiEndPoint() + "product/award";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    function getPromo(callback) {
        
        var url = apiService.getApiEndPoint() + "product/promo";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getShop(callback) {
        
        var url = apiService.getApiEndPoint() + "product/shop";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getVoucher(callback) {
        
        var url = apiService.getApiEndPoint() + "product/voucher";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getPurchaseProduct(callback) {
        
        var url = apiService.getApiEndPoint() + "product/purchase";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getReferralCode(pageIndex, callback) {
        
        var url = apiService.getApiEndPoint() + "referralcode/" + pageIndex;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getAwardProductByID(productidentifier, callback) {
        
        var url = apiService.getApiEndPoint() + "get/product/award/" + productidentifier;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getPromoProductByID(productidentifier, callback) {
        
        var url = apiService.getApiEndPoint() + "get/product/promo/" + productidentifier;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getShopProductByID(productidentifier, callback) {
        
        var url = apiService.getApiEndPoint() + "get/product/shop/" + productidentifier;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getVoucherProductByID(productidentifier, callback) {
        
        var url = apiService.getApiEndPoint() + "get/product/voucher/" + productidentifier;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function updateAward(data, callback) {
        
        var url = apiService.getApiEndPoint() + "product/award";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doPut(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function updatePromo(data, callback) {
        
        var url = apiService.getApiEndPoint() + "product/promo";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doPut(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function updateShop(data, callback) {
        
        var url = apiService.getApiEndPoint() + "product/shop";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doPut(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function updateVoucher(data, callback) {
        
        var url = apiService.getApiEndPoint() + "product/voucher";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doPut(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function deleteAward(productidentifier, callback) {
        
        var url = apiService.getApiEndPoint() + "delete/product/award/" + productidentifier;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doDelete(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function deletePromo(productidentifier, callback) {
        
        var url = apiService.getApiEndPoint() + "delete/product/promo/" + productidentifier;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doDelete(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function deleteShop(productidentifier, callback) {
        
        var url = apiService.getApiEndPoint() + "delete/product/shop/" + productidentifier;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doDelete(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function deleteVoucher(productidentifier, callback) {
        
        var url = apiService.getApiEndPoint() + "delete/product/voucher/" + productidentifier;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doDelete(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    return factory ;
};

productService.inject = [];
function productService() {
    
    var productidentifier = '';
    
    this.saveProductIdentifier = function(productidentifier) {
        this.productidentifier = productidentifier; 
        return;
    };
    
    this.getProductIdentifier= function() {
        return this.productidentifier;
    };
};