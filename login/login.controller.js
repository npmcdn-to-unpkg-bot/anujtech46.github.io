var login = angular.module('login');

login.factory('loginFactory', function($log, user, $http, $location) {
    
    var factory = {};
    
    factory.doLogin = function($scope, callback) {
        
        var url = user.apiEndPoint + 'login/admin';
        $log.log("calling api [%s]"+ url);
        var data = {
            'email'  : $scope.username,
            'password'  : $scope.password
        };
        var config = {
            headers : {
                'application-id'    : 'tutr',
                'secret-id'         : 'SIz2DMxqeOHzCAqNefE5',
                'content-type'      : 'application/json'
            }
        };
        $http.post(url, data, config).then(function(res) {            
            if(res.data.token) {
                user.username  = $scope.username;
                user.token     = res.data.token;
                $location.path('/profile');
                return callback(null, res.data);
            } else {
                return callback(true, null);
            }
        },
        function(res,status) {
            return callback(true, null);
        });
    };
    return factory ;
});

login.controller('loginCtrl',function($scope, $log, loginFactory, toaster) {
    
    $scope.loginpop = function(){
        toaster.pop({
                type: 'error',
                title: 'Title text',
                body: 'Body text',
                showCloseButton: true
            });
        };
        
    $scope.loginFunction =  function() {
        
        loginFactory.doLogin($scope, function(err, res) {
            if(err) {
                loginpop();
                $scope.message = "Invalid parameter";
            }
            $scope.message = "Login success";
        });
    };
});
