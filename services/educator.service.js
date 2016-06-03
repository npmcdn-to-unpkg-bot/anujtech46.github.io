// educator.service.js
angular
    .module('educator')
    .factory('educatorFactory', educatorFactory);
    
educatorFactory.$inject = ['apiService', '$log'];

function educatorFactory(apiService, $log) {
    
    var factory = {
        updateEducator  : updateEducator,
        doDeleteEducator: doDeleteEducator,
        getAllLookers   : getAllLookers,
        getAllWeights   : getAllWeights,
        setSleepTime    : setSleepTime,
        getSleepTime    : getSleepTime,
        getRating       : getRating
    };
    
    function updateEducator(data, callback) {
        
        var url = apiService.getApiEndPoint() + 'update/educator';
        
        var config = {
            headers : {
                token : apiService.getToken()
            }
        };
        $log.info("calling api with data", data);
        apiService.doPut(url, data, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function doDeleteEducator(data, callback) {
        
        var url = apiService.getApiEndPoint() + "delete/educator/" + data.email;
        var config = {
            headers : {
                token : apiService.getToken(),
                appid : data.appid
            }
        }; 
        $log.info("calling api with data", data);
        apiService.doDelete(url, config, function(err, res) {
            $log.info("res", res);
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
            $log.info("res", res);
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
            $log.info("res", res);
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
            $log.info("res", res);
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
            $log.info("res", res);
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
            $log.info("res", res);
            return callback(err, res);
        });
    };
    return factory ;
};