// question.service.js
angular
    .module('question')
    .factory('questionFactory', questionFactory);
    
questionFactory.$inject = ['apiService', '$log'];

function questionFactory(apiService, $log) {
    
    var factory = {
        getAllSession      : getAllSession,
        getSubjectSession  : getSubjectSession,
        getRepeatUserSession: getRepeatUserSession
    };
    
    function getAllSession(callback) {
        
        var url = apiService.getApiEndPoint() + "question";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getSubjectSession(data, callback) {
        
        var url = apiService.getApiEndPoint() + "question" ;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doPost(url, data, config, function(err, res) {
            $log.info("res", res);
            return callback(err, res);
        });
    };
    
    function getRepeatUserSession(callback) {
        
        var url = apiService.getApiEndPoint() + "repeatUserSession" ;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            $log.info("res", res);
            return callback(err, res);
        });
    };
    return factory ;
};