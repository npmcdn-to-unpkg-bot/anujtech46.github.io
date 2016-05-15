angular
    .module('login')
    .controller('loginCtrl', loginCtrl);
    
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
