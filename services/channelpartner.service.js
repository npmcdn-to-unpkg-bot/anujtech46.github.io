angular
    .module('channelpartner')
    .factory('cpFactory', cpFactory);
    
cpFactory.$inject = ['apiService', '$log'];

function cpFactory(apiService, $log) {
    
    var factory = {
        doRegister  : doRegister,
        getAllCP    : getAllCP
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
            $log.info("res", res);
            return callback(err, res);
        });
    };
    return factory ;
};