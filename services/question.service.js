// question.service.js
angular
    .module('question')
    .factory('questionFactory', questionFactory);
    
questionFactory.$inject = ['apiService', '$log'];

function questionFactory(apiService, $log) {
    
    var factory = {
        getAllSession       : getAllSession,
        getSubjectSession   : getSubjectSession,
        getRepeatUserSession: getRepeatUserSession,
        getSessions         : getSessions,
        getRatingLT2        : getRatingLT2,
        getRatingGT4        : getRatingGT4
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
    
    function getSessions(page, callback) {
        
        var url = apiService.getApiEndPoint() + "get/sessions/" + page;
        
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
    
    function getRatingLT2(page, callback) {
        
        var url = apiService.getApiEndPoint() + "get/ratinglt2/" + page;
        
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
    
    function getRatingGT4(page, callback) {
        
        var url = apiService.getApiEndPoint() + "get/ratinggt4/" + page;
        
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