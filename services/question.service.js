// question.service.js
angular
    .module('question')
    .factory('questionFactory', questionFactory);
    
questionFactory.$inject = ['apiService', '$log'];

function questionFactory(apiService, $log) {
    
    var factory = {
        getAllQoestion : getAllQoestion,
        getSubjectQoestion : getSubjectQoestion
    };
    
    function getAllQoestion(callback) {
        
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
    
    function getSubjectQoestion(data, callback) {
        
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
    return factory ;
};