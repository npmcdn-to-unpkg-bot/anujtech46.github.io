var educatorCtrl = angular.module('educator');

educatorCtrl.controller('updateEducatorCtrl', function($scope, $http, user) {

    $scope.ctrl = 'updateEducatorCtrl';
    
    $scope.updateEducator = function() {
        var config = {
            headers : {
                token : user.token,
                appid : $scope.updateE.appid
            }
        };
        
        var roles = [];
        var skills = [];
        
        if($scope.updateE.educator) {
            roles.push("educator");
        }
        if($scope.updateE.channelpartner) {
            roles.push("channelpartner");
        }
        if($scope.updateE.c6) {
            skills.push("c6");
        }
        if($scope.updateE.c7) {
            skills.push("c7");
        }
        if($scope.updateE.c8) {
            skills.push("c8");
        }
        if($scope.updateE.c9) {
            skills.push("c9");
        }
        if($scope.updateE.c10) {
            skills.push("c10");
        }
        if($scope.updateE.c11) {
            skills.push("c11");
        }
        if($scope.updateE.c12) {
            skills.push("c12");
        }
        if($scope.updateE.maths) {
            skills.push("maths");
        }
        if($scope.updateE.science) {
            skills.push("science");
        }
        if($scope.updateE.english) {
            skills.push("english");
        }
        
        var url = user.apiEndPoint + "update/educator";
        var data = {
            'email': $scope.updateE.email
        };
        if($scope.updateE.internal) {
            data.internal = $scope.updateE.internal;
        }
        if(roles) {
            data.roles = roles;
        }
        if(skills) {
            data.skills = skills;
        }
        console.log(data);
//        console.log(data);
        $http.put(url, data, config).then(function(res, err) {
            if(res.data.code === 303000) {
                $scope.message = "update educator successfully";
                $scope.hideform = true;
            } else {
                $scope.message = "Unable to update profile";
            }
        });        
    };
});

educatorCtrl.controller('deleteEducatorCtrl', function($scope, $http, user) {

    $scope.ctrl = 'deleteEducatorCtrl';
    
    $scope.deleteEducator = function() {
            
        var url = user.apiEndPoint + "delete/educator/" + $scope.email;
        var config = {
            headers : {
                token : user.token,
                appid : $scope.appid
            }
        }; 

        $http.delete(url, config).then(function(res, err) {
            if(res.data.code === 303000) {
                $scope.message = "delete educator successfully";
                $scope.hideform = true;
            } else {
                $scope.message = "Unable to delete profile";
            }
        });
    };
});

educatorCtrl.controller('showLookersCtrl', function($scope, $http, user, $log) {

    $log.info('showLookersCtrl');
            
    var url = user.apiEndPoint + "lookers";
    var config = {
        headers : {
            token : user.token
        }
    }; 
    $log.info("call url "+ url);
    $http.get(url, config).then(function(res, err) {
        if(res.data.status.code === 303000) {
            $scope.lookers = res.data.lookers;
            $log("delete educator successfully"); 
        } else {
            $log.error("unable to find lookers");
        }
    });
    
});

educatorCtrl.controller('showWeightsCtrl', function($scope, $http, user, $log) {

    $log.info('showWeightsCtrl');
            
    var url = user.apiEndPoint + "weights";
    var config = {
        headers : {
            token : user.token
        }
    }; 
    $log.info("call url "+ url);
    $http.get(url, config).then(function(res, err) {
        $log.info(res);
        if(res.data.status.code === 303000) {
            $scope.weights = res.data.weights;
            $log.info("find weight successfully");

        } else {
            $log.error("unable to find weights");
        }
    });
    
});

educatorCtrl.controller('setSleepTimeCtrl', function($scope, $http, user, $log) {

    $log.info('setSleepTimeCtrl');
    
    $scope.sleepEducator = function() {
            
        var url = user.apiEndPoint + "sleep";
        var config = {
            headers : {
                token : user.token
            }
        };
        $log.info("call url "+ url);
        var date = new Date();
        $scope.year = date.getFullYear();
        $scope.month = date.getMonth();
        $scope.day = date.getDate();
        var data = {
            "sleeptime" : $scope.sleeptime,
            "wakeuptime":$scope.wakeuptime
        };
        $log.info("data", data);
        $http.post(url, data, config).then(function(res, err) {
            console.log(res);
            if(res.data.code === 303000) {
                $log.info("sleep time apply successfully");
                $scope.hideform = true;
                $scope.message = "sleep time apply successfully";
            } else {
                $log.error("unable to apply");
                $scope.message = "unable to apply";
            }
        });
    };
});