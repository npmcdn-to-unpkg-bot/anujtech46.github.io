var cpCtrl = angular.module('channelpartner');

cpCtrl.factory('registerFactory', function($log, user, $http, $location) {
    
    var factory = {};
    var config = {
        headers : {
            token : user.token
        }
    };
    
    factory.doRegisterCP = function($scope, callback) {
            
        var url = user.apiEndPoint + "register/channelpartner";
        
        $log.info("call url "+ url);
        
        var data = {
            fullname : $scope.cp.fullname,
            email : $scope.cp.email,
            appid : $scope.cp.appid,
            password : $scope.cp.password,
            onboard : "CUSTOM",
            institute : $scope.cp.institute
        };
        $http.post(url, data, config).
            success(function(data, status, headers, config) {
                // 400/500 errors show up here
            if(data.code === 303000) {
                $log.info("cp register successfully");
                $location.path('/showCP');
                $scope.register.$setPristine();
                return callback(null, data);
            } 
            if(data.status) {
                if(data.status.code === 303000) {
                    $log.info("cp register successfully");
                    $location.path('/showCP');
                    return callback(null, data);
                }
            }
        }).
        error(function(data, status, headers, config) {
            // never reached even for 400/500 status codes
            return callback(true, null);
        });
    };
    
    factory.getAllCP = function(callback) {
        
        var url = user.apiEndPoint + "get/channelpartner";
        $log.info("call url "+ url);
        
        $http.get(url, config).
            success(function(data, status, headers, config) {
                // 400/500 errors show up here
            if(data.code === 303000) {
                $log.info("cp register successfully");
                return callback(null, data);
            } 
            if(data.status) {
                if(data.status.code === 303000) {
                    $log.info("cp register successfully");
                    return callback(null, data);
                }
            }
        }).
        error(function(data, status, headers, config) {
            // never reached even for 400/500 status codes
            return callback(true, null);
        });
    };
    return factory ;
});

cpCtrl.controller('registerCP',function($scope, $log) {
    
    $log.info('register CP');
    $scope.registerCP =  function() {
        
//        registerFactory.doRegisterCP($scope, function(err, res) {
//            if(err) {
//                $scope.message = "Unable to register";
//            } else {
//                $scope.message = "Register successfully";
//                $scope.hideform = true;
//            } 
//        });
$scope.message = "Unable to register";
    };
});

cpCtrl.controller('showCP',function($scope, $log, registerFactory) {
    
    $log.info('Show CP');
    $scope.showCP =  function() {
        
        registerFactory.getAllCP(function(err, res) {
            if(err) {
                $scope.message = "Unable to find";
            } else {
                $scope.count = res.count;
                $scope.message = "find successfully";
                $scope.user = res;
            } 
        });
    };
});
cpCtrl.controller('myCtrl',function($scope) {
    
    var deafualtForm = {
    name : '',
    department : ''
    };

    $scope.reset= function(paper) {
        $scope.paper = angular.copy(deafualtForm);
    };
});



