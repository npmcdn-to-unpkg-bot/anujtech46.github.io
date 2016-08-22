
    angular.module('registration')
    .controller('TodayRegistrationCtrl', TodayRegistrationCtrl)
    .controller('TotalRegistrationCtrl', TotalRegistrationCtrl)
    .controller('TempUserCtrl', TempUserCtrl)
    .controller('DeviceCtrl', DeviceCtrl)
    .controller('LastActiveUserCtrl', LastActiveUserCtrl)
    .controller('RepeatUserCtrl', RepeatUserCtrl)
    .controller('AllProfileCtrl', AllProfileCtrl)
    .controller('AllIPCtrl', AllIPCtrl);
    
TodayRegistrationCtrl.$inject = ['$scope','PagerService', 'registrationFactory', 'toastr', '$log', '$location'];

function TodayRegistrationCtrl($scope, PagerService, registrationFactory, toastr, $log, $location) {
    
    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.getProfiles = getProfiles; 
    
    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }
        
    function setPage(page) {
            if (page < 1 || page >  $scope.pager.totalPages) {
                return;
            }
        
        registrationFactory.getTodayRegister(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.user.user);
                    $scope.pager = PagerService.GetPager(res.user.count, page, res.user.pageSize);
                    $scope.users =  res.user.user;
                    $scope.count = res.user.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
    
    function getProfiles(userid, roles) {
        $log.info(roles);
        if(roles) {
            $location.path('/profile/student/'+userid);
        }
        if(roles[0] === 'student') {
            $location.path('/profile/student/'+userid);
        }
        if(roles[0] === 'educator') {
            $location.path('/profile/educator/'+userid);
        }
        if(roles[0] === 'channelpartner') {
            $location.path('/profile/channelpartner/'+userid);
        }
    }
}

TotalRegistrationCtrl.$inject = ['$scope','PagerService', 'registrationFactory','registrationService','userProfileFactory', 'toastr', '$log', '$location'];

function TotalRegistrationCtrl($scope, PagerService, registrationFactory, registrationService, userProfileFactory, toastr, $log, $location) {
    
    $scope.pager = {};
    $scope.setPage = setPage;
    initController();
    
    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        registrationFactory.getTotalRegister(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.pager = PagerService.GetPager(res.user.count, page, res.user.pageSize);
                    $scope.users =  res.user.user;
                    $scope.count = res.user.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
    
    $scope.getProfiles = getProfiles;
    
    function getProfiles(userid) {
        $scope.showProfile  = true;
        
        if(userid === registrationService.getUserid() && registrationService.getClickCount() === 0) {
            $scope.hideProfile = true;
            registrationService.setClickCount(1);
            return;
        }
        $scope.hideProfile = false;
        registrationService.setClickCount(0);
        registrationService.setUserid(userid);
        userProfileFactory.getStudentProfileWithToken(userid, function(err, res, sessions, devices) {
        if(res) {
            if(res.status.code === 303000) {
                var profiles = res.profile;
                $scope.userid = profiles.userid ;
                $scope.email = res.email ;
                $scope.fullname = profiles.fullname ; 
                $scope.gender = profiles.gender ; 
                $scope.school = profiles.school ; 
                $scope.grade = profiles.grade ; 
                $scope.dob = profiles.dob ; 
                $scope.v1username = profiles.v1username ; 
                $scope.modifiedon = profiles.modifiedon ; 
                $scope.createdon = profiles.createdon ; 
                $scope.location = profiles.location ;
                $scope.subscriptions = profiles.subscription.products || 0;
                if(devices) {
                    $log.info("devices", devices.devices);
                    $scope.devices = devices.devices;
                }
                if(sessions) {
                    $log.info("sessions", sessions);
                    $scope.sessions = sessions.sessions;
                }
                return;
            } else {
                toastr.error('Invalid request');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    }
    
    
}


TempUserCtrl.$inject = ['$scope','PagerService', 'registrationFactory', 'toastr', '$log'];

function TempUserCtrl($scope, PagerService, registrationFactory, toastr, $log) {
    
    $scope.pager = {};
    $scope.setPage = setPage;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        registrationFactory.getTempUserRegister(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.user.user);
                    $scope.pager = PagerService.GetPager(res.user.count, page, res.user.pageSize);
                    $scope.users =  res.user.user;
                    $scope.count = res.user.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
}

DeviceCtrl.$inject = ['$scope','PagerService', 'registrationFactory', 'toastr', '$log', '$location'];

function DeviceCtrl($scope, PagerService, registrationFactory, toastr, $log, $location) {
    
    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.getProfiles = getProfiles;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        registrationFactory.getDevices(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.devices.device);
                    $scope.pager = PagerService.GetPager(res.devices.count, page, res.devices.pageSize);
                    $scope.devices =  res.devices.device;
                    $scope.count = res.devices.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
    function getProfiles(userid) {
        $location.path('/profile/student/'+userid);
    }
}

LastActiveUserCtrl.$inject = ['$scope','PagerService', 'registrationFactory', 'toastr', '$location', '$log'];

function LastActiveUserCtrl($scope, PagerService, registrationFactory, toastr, $location, $log) {
    
    $scope.pager        = {};
    $scope.setPage      = setPage;
    $scope.getProfiles  = getProfiles;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        registrationFactory.getLastActiveUser(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting all last active users", res.user.user);
                    $scope.pager = PagerService.GetPager(res.user.count, page, res.user.pageSize);
                    $scope.users =  res.user.user;
                    $scope.count = res.user.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    }
    
    function getProfiles(userid) {
        $location.path('/profile/student/'+userid);
    }
}

RepeatUserCtrl.$inject = ['$scope','PagerService', 'registrationFactory', 'toastr', '$location', '$log'];

function RepeatUserCtrl($scope, PagerService, registrationFactory, toastr, $location, $log) {
    
//    $scope.pager        = {};
//    $scope.setPage      = setPage;
    $scope.getProfiles  = getProfiles;
//
//    initController();
//
//    function initController() {
//        // initialize to page 1
//         $scope.setPage(1);
//    }
//
//    function setPage(page) {
//        if (page < 1 || page >  $scope.pager.totalPages) {
//            return;
//        }
        
        registrationFactory.getRepeatUser(function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting all repeat active users", res.user);
//                    $scope.pager = PagerService.GetPager(res.user.count, page, res.user.pageSize);
                    $scope.users =  res.user;
                    $scope.count = res.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        });
//    }
    
    function getProfiles(userid) {
        $location.path('/profile/student/'+userid);
    }
}

AllProfileCtrl.$inject = ['$scope','PagerService', 'registrationFactory', 'toastr', '$log', '$location'];

function AllProfileCtrl($scope, PagerService, registrationFactory, toastr, $log, $location) {
    
    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.getProfiles = getProfiles;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        registrationFactory.getProfiles(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.profiles);
                    $scope.pager = PagerService.GetPager(res.profiles.count, page, res.profiles.pageSize);
                    $scope.users =  res.profiles.profile;
                    $scope.count = res.profiles.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
    function getProfiles(userid) {
        $location.path('/profile/student/'+userid);
    }
}

AllIPCtrl.$inject = ['$scope','PagerService', 'registrationFactory', 'toastr', '$log', '$location'];

function AllIPCtrl($scope, PagerService, registrationFactory, toastr, $log, $location) {
    
    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.getProfiles = getProfiles;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        registrationFactory.getIPWithLocation(page, function(err, location, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", location);
                    $scope.pager = PagerService.GetPager(res.ips.count, page, res.ips.pageSize);
                    $scope.users =  location;
                    $scope.count = res.ips.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
    function getProfiles(userid) {
        $location.path('/profile/student/'+userid);
    }
}