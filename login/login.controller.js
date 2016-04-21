
var login = angular.module('login');

login.controller('loginCtrl', function($scope, user, $http, $location) {
        
    $scope.loginFunction =  function() {
        
        var url = user.apiEndPoint + 'login/admin';
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
        console.log(data);
        
        $http.post(url, data, config).then(function(res, err) {            
            if(res.data.token) {
                $scope.message = "login success";
                user.username  = $scope.username;
                user.token     = res.data.token;
                $location.path('/profile');
            } else {
                $scope.message = res.data.message;
            }
        });
    };
});

