angular.module('educator')
    .controller('UpdateEducatorCtrl', UpdateEducatorCtrl)
    .controller('DeleteEducatorCtrl', DeleteEducatorCtrl)
    .controller('ShowLookersCtrl', ShowLookersCtrl)
    .controller('ShowWeightsCtrl', ShowWeightsCtrl)
    .controller('SetSleepTimeCtrl', SetSleepTimeCtrl);

//inject UpdateEducatorCtrl
UpdateEducatorCtrl.$inject = ['$scope', 'educatorFactory', 'toastr'];

/*
 * name : UpdateEducatorCtrl
 * desc : update educator role and subjects
 */
function UpdateEducatorCtrl($scope, educatorFactory, toastr) {

    $scope.ctrl = 'updateEducatorCtrl';
    
    $scope.updateEducator = function() {
        
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
        var data = {
            'email': $scope.updateE.email,
            'appid' : $scope.updateE.appid
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
        educatorFactory.updateEducator(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("educator update successfully");
                    $scope.updateE = '';
                    $scope.update.$setPristine();
                } else {
                    toastr.error('Invalid Credentials', 'Unable to update educator role');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

DeleteEducatorCtrl.$inject = ['$scope', 'educatorFactory', 'toastr'];

function DeleteEducatorCtrl($scope, educatorFactory, toastr) {
    
    var data = {
        email : $scope.email,
        appid : $scope.appid
    };

    $scope.deleteEducator = function(data) {
        
        educatorFactory.deleteEducator(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("educator update successfully");
                    $scope.email = '';
                    $scope.appid = '';
                    $scope.deleteEducator.$setPristine();
                } else {
                    toastr.error('Invalid Credentials', 'Unable to delete educator');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

ShowLookersCtrl.$inject = ['$scope', 'educatorFactory', 'toastr'];

function ShowLookersCtrl($scope, educatorFactory, toastr) {
         
    educatorFactory.getAllLookers(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.lookers = res.lookers;
            } else {
                toastr.error('Unable to find educator');
            }
        } else {
            toastr.error('Server not working');
        }
    });  
};

UpdateEducatorCtrl.$inject = ['$scope', 'educatorFactory', 'toastr'];

function ShowWeightsCtrl($scope, educatorFactory, toastr) {

    educatorFactory.getAllWeights(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.weights = res.weights;
            } else {
                toastr.error('Unable to find educator');
            }
        } else {
            toastr.error('Server not working');
        }
    });  
};

SetSleepTimeCtrl.$inject = ['$scope', 'educatorFactory', 'toastr'];

function SetSleepTimeCtrl($scope, educatorFactory, toastr) {
$scope.showField = true;
    $scope.sleepEducator = function() {
        
        var date = new Date();
        $scope.year = date.getFullYear();
        $scope.month = date.getMonth();
        $scope.day = date.getDate();
        var data = {
            "sleeptime" : $scope.sleeptime,
            "wakeuptime":$scope.wakeuptime
        };
        educatorFactory.setSleepTime(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("time set successfully");
                    $scope.sleeptime = '';
                    $scope.wakeuptime = '';
                    $scope.sleep.$setPristine();
                } else {
                    toastr.error('Unable to apply');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};