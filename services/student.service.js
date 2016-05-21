// student.service.js
angular
    .module('student')
    .factory('studentFactory', studentFactory);
    
studentFactory.$inject = ['apiService', '$log'];

function studentFactory(apiService, $log) {
    
    var factory = {
        addCredits  : addCredits,
        deleteStudent  : deleteStudent
        
    };
    
    function addCredits(data, callback) {
        
        var url = apiService.getApiEndPoint() + "add/credits";
        
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
    
    function deleteStudent(data, callback) {
        
        var url = apiService.getApiEndPoint() + "delete/student/" + data.email;
        var config = {
            headers : {
                token : apiService.getToken(),
                appid : data.appid
            }
        }; 
        
        apiService.doDelete(url, config, function(err, res) {
            $log.info("res", res);
            return callback(err, res);
        });
    };
    return factory;
};