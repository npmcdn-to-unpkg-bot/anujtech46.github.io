var cpCtrl = angular.module('channelpartner');

cpCtrl.controller('registerCP', function($scope, $http, user, $log) {

    $log.info('register CP');
    
    $scope.register = function() {
            
        var url = user.apiEndPoint + "register/channelpartner";
        var config = {
            headers : {
                token : user.token
            }
        };
        
        $log.info("call url "+ url);
        var data = {
            fullname : $scope.cp.fullname,
            email : $scope.cp.email,
            appid : $scope.cp.appid,
            password : $scope.cp.password,
            onboard : $scope.cp.onboard,
            institute : $scope.cp.institute
        };
        $http.post(url, data, config).then(function(res, err) {
            console.log(res);
            if(res.data.status.code === 303000) {
                $log.info("sleep time apply successfully");
                $scope.message = res.profile;
                $scope.hideform = true;
            } else {
                $log.error("unable to apply");
                $scope.message = "unable to apply";
            }
        });
    };
});