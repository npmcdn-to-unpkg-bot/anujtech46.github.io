angular
    .module('login')
    .controller('loginCtrl', loginCtrl)
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

//inject the all dependencies
loginCtrl.$inject = ['$scope', '$log', 'apiService', '$location', 'loginFactory', 'toastr'];

function loginCtrl($scope, $log, apiService, $location, loginFactory, toastr) {
        
    $scope.loginFunction =  function() {
        
        var data = {
            'email'  : $scope.username,
            'password'  : $scope.password
        };
        
        $log.info("Calling login function");
        
        loginFactory.doLogin(data, function(err, res){
            if(res) {
                if(res.status.code === 303000) {
                    apiService.setToken(res.token);
                    apiService.setUsername($scope.username);
                    $location.path('/profile');
                } else {
                    toastr.error('Invalid Credentials', 'Please check username and password');
                }
            } else {
                toastr.error('Server not working');
            }
            
        });
    };
};
