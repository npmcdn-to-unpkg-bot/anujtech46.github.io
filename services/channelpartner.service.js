
    angular.module('channelpartner')
    .factory('cpFactory', cpFactory)
    .service('cpService', cpService);
    
cpFactory.$inject = ['apiService', '$log'];

function cpFactory(apiService, $log) {
    
    var factory = {
        doRegister              : doRegister,
        getAllCP                : getAllCP,
        addAppCredentials       : addAppCredentials,
        getAllAppCredentials    : getAllAppCredentials,
        deleteAppCredentials    : deleteAppCredentials,
        getAllPartnerAdmin      : getAllPartnerAdmin,
        addPartnerAdmin         : addPartnerAdmin,
        deletePartnerAdmin      : deletePartnerAdmin
    };
    
    function doRegister(data, callback) {
        
        var url = apiService.getApiEndPoint() + 'register/channelpartner';
        
        var config = {
            headers : {
                token : apiService.getToken()
            }
        };
        $log.info("calling api with data", data);
        apiService.doPost(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getAllCP(callback) {
        
        var url = apiService.getApiEndPoint() + "get/channelpartner" ;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function addAppCredentials(data, callback) {
        
        var url = apiService.getApiEndPoint() + "application/credentials" ;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doPost(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getAllAppCredentials(callback) {
        
        var url = apiService.getApiEndPoint() + "application/credentials" ;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function deleteAppCredentials(data, callback) {
        
        var url = apiService.getApiEndPoint() + "delete/application/credentials";
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doPost(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getAllPartnerAdmin(callback) {
        
        var url = apiService.getApiEndPoint() + "partner/admin" ;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function addPartnerAdmin(data, callback) {
        
        var url = apiService.getApiEndPoint() + "partner/admin" ;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doPost(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function deletePartnerAdmin(userid, callback) {
        
        var url = apiService.getApiEndPoint() + "partner/admin/" + userid;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doDelete(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    return factory ;
};

cpService.inject = [];
function cpService() {
    
    var appid = '';
    
    this.saveAppID = function(appid) {
        this.appid = appid; 
        return;
    };
    
    this.getAppID= function() {
        return this.appid;
    };
};