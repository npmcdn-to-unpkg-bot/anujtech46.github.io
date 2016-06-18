angular.module('educator')
    .controller('ShowAllEducatorCtrl', ShowAllEducatorCtrl)
    .controller('UpdateEducatorCtrl', UpdateEducatorCtrl)
    .controller('ShowLookersCtrl', ShowLookersCtrl)
    .controller('ShowWeightsCtrl', ShowWeightsCtrl)
    .controller('SetSleepTimeCtrl', SetSleepTimeCtrl)
    .controller('ShowServiceTimeCtrl', ShowServiceTimeCtrl)
    .controller('ShowRatingCtrl', ShowRatingCtrl);

ShowAllEducatorCtrl.$inject = ['$scope', '$log', 'toastr', 'educatorFactory', '$location'];
function ShowAllEducatorCtrl($scope, $log, toastr, educatorFactory, $location) {
    
    $scope.getProfiles = getProfiles;
    
    educatorFactory.getAllEducator(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                if(res.count === 0) {
                    $scope.count = res.count;
                    $scope.hideTable = true;
                } else {
                    $scope.count = res.count;
                    $scope.users = res.profiles;
                }
            } else {
                toastr.error('Invalid Credentials', 'Unable to find');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    function getProfiles(userid, roles) {
        
        if(roles[0] === 'educator' && userid) {
            $log.info("Get educator profile", userid, roles);
            $location.path('/profile/educator/'+userid);
        } else {
            toastr.error('Invalid request');
        }
    }
};

//inject UpdateEducatorCtrl
/*
 * name : UpdateEducatorCtrl
 * desc : update educator role and subjects
 */
UpdateEducatorCtrl.$inject = ['$scope', 'educatorFactory', 'toastr', 'educatorProfileService', '$location'];
function UpdateEducatorCtrl($scope, educatorFactory, toastr, educatorProfileService, $location) {
    
    var userid      = educatorProfileService.getUserID();
    var email       = educatorProfileService.getEmail();
    var roles       = educatorProfileService.getRoles();
    var skills      = educatorProfileService.getSkills();
    var internal    = educatorProfileService.getInternal();
    var headline    = educatorProfileService.getHeadline();
    
    $scope.updateE = {
        email : email,
        headline : headline
    };
    if(internal === true || internal === false) {
        $scope.updateE.internal = internal.toString();
    }
    if(roles.indexOf("educator") > -1) {
        $scope.updateE.educator = true;
    }
    if(roles.indexOf("channelpartner") > -1) {
        $scope.updateE.channelpartner = true;
    }
    if(skills.indexOf("c6") > -1) {
        $scope.updateE.c6 = true;
    }
    if(skills.indexOf("c7") > -1) {
        $scope.updateE.c7 = true;
    }
    if(skills.indexOf("c8") > -1) {
        $scope.updateE.c8 = true;
    }
    if(skills.indexOf("c9") > -1) {
        $scope.updateE.c9 = true;
    }
    if(skills.indexOf("c10") > -1) {
        $scope.updateE.c10 = true;
    }
    if(skills.indexOf("c11") > -1) {
        $scope.updateE.c11 = true;
    }
    if(skills.indexOf("c12") > -1) {
        $scope.updateE.c12 = true;
    }
    if(skills.indexOf("maths") > -1) {
        $scope.updateE.maths = true;
    }
    if(skills.indexOf("science") > -1) {
        $scope.updateE.science = true;
    }
    if(skills.indexOf("english") > -1) {
        $scope.updateE.english = true;
    }
    
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
        if($scope.updateE.headline) {
            data.headline = $scope.updateE.headline;
        }
        
        educatorFactory.updateEducator(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("educator update successfully");
                    $scope.updateE = '';
                    $scope.update.$setPristine();
                    $location.path('/profile/educator/'+userid);
                } else {
                    toastr.error('Invalid Credentials', 'Unable to update educator role');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

//DeleteEducatorCtrl.$inject = ['$scope', 'educatorFactory', 'toastr'];
//
//function DeleteEducatorCtrl($scope, educatorFactory, toastr) {
//    
//    $scope.deleteEducator = function() {
//        
//        var data = {
//            email : $scope.email,
//            appid : $scope.appid
//        };
//        educatorFactory.doDeleteEducator(data, function(err, res) {
//            if(res) {
//                if(res.status.code === 303000) {
//                    toastr.success("educator update successfully");
//                    $scope.email = '';
//                    $scope.appid = '';
//                    $scope.educator.$setPristine();
//                } else {
//                    toastr.error('Invalid Credentials', 'Unable to delete educator');
//                }
//            } else {
//                toastr.error('Server not working');
//            }
//        });
//    };
//};

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

ShowWeightsCtrl.$inject = ['$scope', 'educatorFactory', 'toastr'];

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

SetSleepTimeCtrl.$inject = ['$scope', 'educatorFactory', 'toastr', '$route'];

function SetSleepTimeCtrl($scope, educatorFactory, toastr, $route) {
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
                    $route.reload();
                } else {
                    toastr.error('Unable to apply');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

ShowServiceTimeCtrl.$inject = ['$scope', 'educatorFactory', 'toastr'];

function ShowServiceTimeCtrl($scope, educatorFactory, toastr) {
  
    educatorFactory.getSleepTime(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.services = res.serviceTime;
            } else {
                toastr.error('Unable to get sleep timr');
            }
        } else {
            toastr.error('Server not working');
        }
    });
};

ShowRatingCtrl.$inject = ['$scope', 'educatorFactory', 'toastr'];

function ShowRatingCtrl($scope, educatorFactory, toastr) {
  
    educatorFactory.getRating(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.ratings = res.ratings;
            } else {
                toastr.error('Unable to get sleep timr');
            }
        } else {
            toastr.error('Server not working');
        }
    });
};