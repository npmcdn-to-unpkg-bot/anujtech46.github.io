angular
    .module('channelpartner')
    .factory('cpFactory', cpFactory)
    .service('cpService', cpService);
    
cpFactory.$inject = ['apiService', '$log'];

function cpFactory(apiService, $log) {
    
    var factory = {
        doRegister          : doRegister,
        getAllCP            : getAllCP,
        getAllPartnerApp    : getAllPartnerApp,
        addPartnerApp       : addPartnerApp,
        deletePartnerApp    : deletePartnerApp,
        getPartnerAppByID   : getPartnerAppByID,
        updatePartnerApp    : updatePartnerApp
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
    
    function getAllPartnerApp(callback) {
        
        var url = apiService.getApiEndPoint() + "partner/app" ;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function addPartnerApp(data, callback) {
        
        var url = apiService.getApiEndPoint() + "partner/app" ;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doPost(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function deletePartnerApp(appid, callback) {
        
        var url = apiService.getApiEndPoint() + "partner/app/" + appid;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doDelete(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getPartnerAppByID(appid, callback) {
        
        var url = apiService.getApiEndPoint() + "partner/app/" + appid;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function updatePartnerApp(data, callback) {
        
        var url = apiService.getApiEndPoint() + "partner/app";
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doPut(url, data, config, function(err, res) {
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