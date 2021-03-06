// login.controller.js

    angular.module('login')
    .controller('LoginCtrl', LoginCtrl);

//inject the all dependencies
LoginCtrl.$inject = ['$scope', '$log', '$location', 'loginFactory', 'toastr', '$cookies'];

function LoginCtrl($scope, $log, $location, loginFactory, toastr, $cookies) {
        
    $scope.loginFunction = loginFunction;
    
    function loginFunction() {
        
        var data = {
            'email'  : $scope.username,
            'password'  : $scope.password
        };
        
        $log.info("Calling login function");
        
        loginFactory.doLogin(data, function(err, res){
            if(res) {
                if(res.status.code === 303000) {
                    $cookies.put('loginToken', res.token);
                    $cookies.put('username', $scope.username);
//                    apiService.setToken(res.token);
//                    apiService.setUsername($scope.username);
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
