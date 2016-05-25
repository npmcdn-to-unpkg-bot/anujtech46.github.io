// question.service.js
angular
    .module('products')
    .factory('productsFactory', productsFactory);
    
productsFactory.$inject = ['apiService'];

function productsFactory(apiService) {
    
    var factory = {
        addAward : addAward,
        addPromo : addPromo,
        addShop : addShop,
        addVoucher : addVoucher,
        getAward : getAward,
        getPromo : getPromo,
        getShop : getShop,
        getVoucher : getVoucher,
        getPurchaseProduct : getPurchaseProduct
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
    return factory ;
};