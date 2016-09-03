// educator.service.js

    angular.module('educator')
    .factory('educatorFactory', educatorFactory);
    
educatorFactory.$inject = ['apiService'];

function educatorFactory(apiService) {
    
    var factory = {
        getAllEducator  : getAllEducator,
        updateEducator  : updateEducator,
        doDeleteEducator: doDeleteEducator,
        getAllLookers   : getAllLookers,
        getAllWeights   : getAllWeights,
        setSleepTime    : setSleepTime,
        getSleepTime    : getSleepTime,
        getRating       : getRating,
        getEducatorCDR  : getEducatorCDR,
        getEducatorDispatch : getEducatorDispatch
    };
    
    function getAllEducator(callback) {
        
        var url = apiService.getApiEndPoint() + "get/educator" ;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doGet(url, config, function(err, res) {
            
            return callback(err, res);
        });
    };
    
    
    function updateEducator(data, callback) {
        
        var url = apiService.getApiEndPoint() + 'update/educator';
        
        var config = {
            headers : {
                token : apiService.getToken()
            }
        };
        apiService.doPut(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function doDeleteEducator(userid, callback) {
        
        var url = apiService.getApiEndPoint() + "delete/educator/" + userid;
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        apiService.doDelete(url, config, function(err, res) {
            
            return callback(err, res);
        });
    };
    
    function getAllLookers(callback) {
        
        var url = apiService.getApiEndPoint() + "lookers";
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        
        apiService.doGet(url, config, function(err, res) {
            
            return callback(err, res);
        });
    };
    
    function getAllWeights(callback) {
        
        var url = apiService.getApiEndPoint() + "weights";
        
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        
        apiService.doGet(url, config, function(err, res) {
            
            return callback(err, res);
        });
    };
    
    function setSleepTime(data, callback) {
        
        var url = apiService.getApiEndPoint() + 'service/sleep';
        
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        
        apiService.doPost(url, data, config, function(err, res) {
            
            return callback(err, res);
        });
    };
    
    function getSleepTime(callback) {
        
        var url = apiService.getApiEndPoint() + 'service/sleep';
        
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        
        apiService.doGet(url, config, function(err, res) {
            
            return callback(err, res);
        });
    };
    
    function getRating(callback) {
        
        var url = apiService.getApiEndPoint() + 'get/rating';
        
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        
        apiService.doGet(url, config, function(err, res) {
            
            return callback(err, res);
        });
    };
    
    function getEducatorCDR(userid, callback) {
        
        var url = apiService.getApiEndPoint() + 'get/educator/cdr/' + userid;
        
        var config = {
            headers : {
                token : apiService.getToken()
            }
        }; 
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getEducatorDispatch(data, callback) {
        
        var url = apiService.getApiEndPoint() + 'educator/dispatch/detail';
        
        var config = {
            headers : {
                token : apiService.getToken(),
                'content-type'      : 'application/json'
            }
        }; 
        
        apiService.doPost(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    return factory ;
};