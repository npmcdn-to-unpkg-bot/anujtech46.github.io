// login.service.js

    angular.module('login')
    .factory('loginFactory', loginFactory);
    
loginFactory.$inject = ['apiService', '$log'];

function loginFactory(apiService, $log) {
    
    var factory = {
        doLogin : doLogin
    };
    
    function doLogin(data, callback) {
        
        var url = apiService.getApiEndPoint() + 'login/admin';
        
        var config = {
            headers : {
                'application-id'    : 'tutradmin',
                'secret-id'         : 'MviLb1cVNVE6j1vPwd93zGvD',
                'content-type'      : 'application/json'
            }
        };
        
        apiService.doPost(url, data, config, function(err, res) {
            $log.info("res", res);
            return callback(err, res);
        });
    };
    return factory ;
};
