'use strict';
angular.module('educator')
    .controller('ShowAllEducatorCtrl', ShowAllEducatorCtrl)
    .controller('UpdateEducatorCtrl', UpdateEducatorCtrl)
    .controller('ShowLookersCtrl', ShowLookersCtrl)
    .controller('ShowWeightsCtrl', ShowWeightsCtrl)
    .controller('SetSleepTimeCtrl', SetSleepTimeCtrl)
    .controller('ShowServiceTimeCtrl', ShowServiceTimeCtrl)
    .controller('ShowRatingCtrl', ShowRatingCtrl)
    .controller('EducatorDispatchCtrl', EducatorDispatchCtrl);
    
/**
 * Show All Educator controller
 * @type Array
 */
ShowAllEducatorCtrl.$inject = ['$scope', '$log', 'toastr', 'educatorFactory', '$location'];
/**
 * 
 * @param   {service}   $scope
 * @param   {service}   $log
 * @param   {module}    toastr
 * @param   {factory}   educatorFactory
 * @param   {service}   $location
 * @returns {undefined}
 */
function ShowAllEducatorCtrl($scope, $log, toastr, educatorFactory, $location) {
    
    educatorFactory.getAllEducator(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                if(res.count === 0) {
                    $scope.count        = res.count;
                    $scope.hideTable    = true;
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
    
    $scope.getProfiles = getProfiles;
    function getProfiles(userid, roles) {
        
        if(roles[0] === 'educator' && userid) {
            $log.info("Get educator profile", userid, roles);
            $location.path('/profile/educator/'+userid);
        } else {
            toastr.error('Invalid request');
        }
    }
};

/**
 * Inject required module
 * @type Array
 */
UpdateEducatorCtrl.$inject = ['$scope', 'educatorFactory', 'toastr', 'educatorProfileService', '$location'];
/**
 * Update educator profile
 * @param   {service}   $scope
 * @param   {factory}   educatorFactory
 * @param   {module}    toastr
 * @param   {service}   educatorProfileService
 * @param   {service}   $location
 * @returns {undefined}
 */
function UpdateEducatorCtrl($scope, educatorFactory, toastr, educatorProfileService, $location) {
    
    var userid      = educatorProfileService.getUserID();
    var email       = educatorProfileService.getEmail();
    var roles       = educatorProfileService.getRoles();
    var skills      = educatorProfileService.getSkills();
//    var internal    = educatorProfileService.getInternal();
    var headline    = educatorProfileService.getHeadline();
    
    $scope.updateE = {
        email : email,
        headline : headline
    };
//    if(internal === true || internal === false) {
//        $scope.updateE.internal = internal.toString();
//    }
    if(roles.indexOf("partnerEducator") > -1) {
        $scope.updateE.partnerEducator = true;
    }
    if(roles.indexOf("educatorCrowd") > -1) {
        $scope.updateE.educatorCrowd = true;
    }
    if(roles.indexOf("educatorV1") > -1) {
        $scope.updateE.educatorV1 = true;
    }
    if(roles.indexOf("educatorInHouse") > -1) {
        $scope.updateE.educatorInHouse = true;
    }
    
    
    
    
    if(skills.indexOf("CBSE") > -1) {
        $scope.updateE.cbse = true;
    }
    if(skills.indexOf("ICSE") > -1) {
        $scope.updateE.icse = true;
    }
    if(skills.indexOf("IB") > -1) {
        $scope.updateE.ib = true;
    }
    if(skills.indexOf("IGCSE") > -1) {
        $scope.updateE.igcse = true;
    }
    if(skills.indexOf("ISC") > -1) {
        $scope.updateE.isc = true;
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
    if(skills.indexOf("physics") > -1) {
        $scope.updateE.physics = true;
    }
    if(skills.indexOf("chemistry") > -1) {
        $scope.updateE.chemistry = true;
    }
    if(skills.indexOf("biology") > -1) {
        $scope.updateE.biology = true;
    }
    if(skills.indexOf("maths") > -1) {
        $scope.updateE.maths = true;
    }
    if(skills.indexOf("sst") > -1) {
        $scope.updateE.sst = true;
    }
    if(skills.indexOf("economics") > -1) {
        $scope.updateE.economics = true;
    }
    if(skills.indexOf("computers") > -1) {
        $scope.updateE.computers = true;
    }
    if(skills.indexOf("accountancy") > -1) {
        $scope.updateE.accountancy = true;
    }
    if(skills.indexOf("businessstudies") > -1) {
        $scope.updateE.businessstudies = true;
    }
    
    $scope.updateEducator = function() {
        
        var roles = [];
        var skills = [];
        
        if($scope.updateE.partnerEducator) {
            roles.push("partnerEducator");
        }
        if($scope.updateE.educatorCrowd) {
            roles.push("educatorCrowd");
        }
        if($scope.updateE.educatorV1) {
            roles.push("educatorV1");
        }
        if($scope.updateE.educatorInHouse) {
            roles.push("educatorInHouse");
        }
        if($scope.updateE.cbse) {
            skills.push("CBSE");
        }
        if($scope.updateE.icse) {
            skills.push("ICSE");
        }
        if($scope.updateE.ib) {
            skills.push("IB");
        }
        if($scope.updateE.igcse) {
            skills.push("IGCSE");
        }
        if($scope.updateE.isc > -1) {
            skills.push("ISC");
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
        if($scope.updateE.physics) {
            skills.push("physics");
        }
        if($scope.updateE.chemistry) {
            skills.push("chemistry");
        }
        if($scope.updateE.biology) {
            skills.push("biology");
        }
        if($scope.updateE.sst) {
            skills.push("sst");
        }
        if($scope.updateE.economics) {
            skills.push("economics");
        }
        if($scope.updateE.computers) {
            skills.push("computers");
        }
        if($scope.updateE.accountancy) {
            skills.push("accountancy");
        }
        if($scope.updateE.businessstudies) {
            skills.push("businessstudies");
        }
        var data = {
            'email': $scope.updateE.email,
            'appid' : $scope.updateE.appid
        };
//        if($scope.updateE.internal) {
//            data.internal = $scope.updateE.internal;
//        }
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
/**
 * Show all lookers
 * @type Array
 */
ShowLookersCtrl.$inject = ['$scope', 'educatorFactory', 'toastr', '$location'];
/**
 * 
 * @param {type} $scope
 * @param {type} educatorFactory
 * @param {type} toastr
 * @param {type} $location
 * @returns {undefined}
 */
function ShowLookersCtrl($scope, educatorFactory, toastr, $location) {
    
    $scope.ShowAllRecord = true;
    $scope.showCDR       = false;
    $scope.showCDR       = false;
       
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
    
    $scope.getCDR = getCDR;
    function getCDR(userid) {
        educatorFactory.getEducatorCDR(userid, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    if(res.cdr && res.cdr.length === 0) {
                        $scope.ShowAllRecord = true;
                        $scope.showMessages  = true;
                    } else {
                        $scope.ShowAllRecord = false;
                        $scope.showCDR  = true;
                        $scope.cdrs     = res.cdr;
                    }
                } else {
                    toastr.error('Unable to find educator');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    }
    
    $scope.ShowLookers = ShowLookers;
    function ShowLookers() {
        $scope.ShowAllRecord = true;
        $scope.showCDR  = false;
    }
    
    
    
    
};

/**
 * 
 * @type Array
 */
ShowWeightsCtrl.$inject = ['$scope', 'educatorFactory', 'toastr', '$location'];

function ShowWeightsCtrl($scope, educatorFactory, toastr, $location) {

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

SetSleepTimeCtrl.$inject = ['$scope', 'educatorFactory', 'toastr', '$route', '$location'];

function SetSleepTimeCtrl($scope, educatorFactory, toastr, $route, $location) {
    
    $scope.showField        = true;
    $scope.sleepEducator    = function() {
        
        var date        = new Date();
        $scope.year     = date.getFullYear();
        $scope.month    = date.getMonth();
        $scope.day      = date.getDate();
        var data = {
            "sleeptime" : $scope.sleeptime,
            "wakeuptime":$scope.wakeuptime
        };
        educatorFactory.setSleepTime(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("time set successfully");
                    $route.reload();
                } else {
                    toastr.error('Unable to apply', 'Please check input time');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

/**
 * Show sleeping time service
 * @type Array
 */
ShowServiceTimeCtrl.$inject = ['$scope', 'educatorFactory', 'toastr', '$location'];
/**
 * Show Service time controller
 * @param   {service} $scope
 * @param   {factory} educatorFactory
 * @param   {module} toastr
 * @param   {service} $location
 * @returns {undefined}
 */
function ShowServiceTimeCtrl($scope, educatorFactory, toastr, $location) {
    
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

/**
 * Inject all required module
 * @type Array
 */
ShowRatingCtrl.$inject = ['$scope', 'educatorFactory', 'toastr', '$location'];
/**
 * Show rating of all educator
 * @param {service} $scope
 * @param {factory} educatorFactory
 * @param {module}  toastr
 * @param {service} $location
 * @returns {undefined}
 */
function ShowRatingCtrl($scope, educatorFactory, toastr, $location) {

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

EducatorDispatchCtrl.$inject = ['$scope','PagerService', 'educatorFactory', 'toastr', '$log', '$location'];

function EducatorDispatchCtrl($scope, PagerService, educatorFactory, toastr, $log, $location) {

    $scope.showTable = false;
    $scope.getEducators = function() {
        
        var data = {};
        var date        = new Date();
        $scope.year     = date.getFullYear();
        $scope.month    = date.getMonth();
        $scope.day      = date.getDate();
        
        data = {
            "startdate" : $scope.startdate.toUTCString(),
            "enddate"   : $scope.enddate.toUTCString(),
            "appid"     : $scope.appid
        };
        
        console.log("data", data);
        educatorFactory.getEducatorDispatch(data, function(err, res) {
            if(res && res.status) {
                if(res.status.code === 303000) {

                    $log.info("getting res", res);
                    $scope.users =  res.session;
                    $scope.showTable = true;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    };
        
}