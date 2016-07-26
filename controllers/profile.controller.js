angular.module('profile')
        .controller('ProfileCtrl', ProfileCtrl)
        .controller('ShowStudentProfileCtrl', ShowStudentProfileCtrl)
        .controller('ShowEducatorProfileCtrl', ShowEducatorProfileCtrl)
        .controller('ShowCPProfileCtrl', ShowCPProfileCtrl);

ProfileCtrl.$inject = ['$scope', 'apiService','$log','$location'];

function ProfileCtrl($scope, apiService, $log, $location) {
    
    $scope.username =  apiService.getUsername();
    
    $scope.logout = logout;
    function logout() {
        apiService.removeToken();
        $location.path('/');
    }
    
};

ShowStudentProfileCtrl.$inject = ['$scope', '$log', '$routeParams', 'toastr', 'userProfileFactory'];
function ShowStudentProfileCtrl($scope, $log, $routeParams, toastr, userProfileFactory) {
    
    var userid = $routeParams.userid;
    $scope.deleteStudent = deleteStudent;
    

    userProfileFactory.getStudentProfileWithToken(userid, function(err, res, sessions, devices) {
        if(res) {
            if(res.status.code === 303000) {
                $log.info("getting res of user", res);
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
    
    function deleteStudent()
    {
        console.log(userid);
      var x = confirm("Are you sure you want to delete?");
      if(x)
          console.log("Show logic");
      else
        console.log("Show not logic");;
    }
    
};

ShowEducatorProfileCtrl.$inject = ['$scope', '$log', '$routeParams', 'toastr', 
                            'userProfileFactory', 'educatorProfileService', '$location', 'educatorFactory'];
function ShowEducatorProfileCtrl($scope, $log, $routeParams, toastr, 
                            userProfileFactory, educatorProfileService, $location, educatorFactory) {
    
    var userid = $routeParams.userid;
    if(!userid) {
        $scope.hideProfile = true; 
        return ;
    }
    
    var email = '';
    var headline = '';
    var roles = '';
    var skills = '';
    var internal = '';
    
    userProfileFactory.getEducatorProfileWithToken(userid, function(err, res, devices) {
        if(res) {
            if(res.status.code === 303000) {
                $log.info("getting res of user", res);
                var profiles = res.profile ;
                email = res.email ;
                headline = profiles.headline;
                roles = profiles.roles;
                skills = profiles.skills;
                internal = profiles.internal;
                $scope.userid = userid ; 
                $scope.email = res.email ;
                $scope.fullname = profiles.fullname ; 
                $scope.countrycode = profiles.countrycode ; 
                $scope.mobileno = profiles.mobileno ; 
                $scope.gender = profiles.gender ;
                $scope.dob = profiles.dob ;
                $scope.qualification = profiles.qualification ; 
                $scope.institute = profiles.institute ;
                $scope.roles = profiles.roles ;
                $scope.internal = profiles.internal ;
                $scope.skills = profiles.skills ;
                $scope.headline = profiles.headline ;
                $scope.modifiedon = profiles.modifiedon ;
                $scope.createdon = profiles.createdon ; 
                $scope.location = profiles.location ; 
                if(devices) {
                    $scope.showDevice = true;
                    $log.info("devices", devices);
                    $scope.devices = devices.devices;
                }
                return;
            } else {
                toastr.error('Invalid request');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    $scope.updateEducatorProfile = updateEducatorProfile;
    function updateEducatorProfile() {
        
        educatorProfileService.saveUserID(userid);
        educatorProfileService.saveEmail(email);
        educatorProfileService.saveHeadline(headline);
        educatorProfileService.saveRoles(roles);
        educatorProfileService.saveSkills(skills);
        educatorProfileService.saveInternal(internal);
        $location.path('/updateEducatorProfile');
    }
    
    $scope.deleteEducator = deleteEducator;
    function deleteEducator() {
        educatorFactory.doDeleteEducator(userid, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("educator update successfully");
                    $location.path('/showEducator');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to delete educator');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    }
};	

ShowCPProfileCtrl.$inject = ['$scope', '$log', '$routeParams', 'toastr', 'userProfileFactory', '$location', 'cpProfileService'];
function ShowCPProfileCtrl($scope, $log, $routeParams, toastr, userProfileFactory, $location, cpProfileService) {
    
    var userid = $routeParams.userid;
    var code ;
    var userid ;
    var institute;
    $scope.createVoucher   = createVoucher;
    $scope.updateCPProfile = updateCPProfile;
    
    userProfileFactory.getCPProfile(userid, function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $log.info("getting res of user", res);
                var profiles = res.profile;
                userid = profiles.userid;
                $scope.fullname = profiles.fullname ; 
                $scope.gender = profiles.gender ;
                code = profiles.cpcode ;
                $scope.code = profiles.cpcode ;
                $scope.institute = profiles.institute ;
                institute = profiles.institute;
                $scope.qualification = profiles.qualification ; 
                $scope.dob = profiles.dob ; 
                $scope.roles = profiles.roles ;
                $scope.onboard = profiles.onboard ;
                $scope.address = profiles.address ;
                $scope.headline = profiles.headline ;
                $scope.modifiedon = profiles.modifiedon ; 
                $scope.createdon = profiles.createdon ; 
                $scope.location = profiles.location ; 
                return;
            } else {
                toastr.error('Invalid request');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    function createVoucher() {
        cpProfileService.saveCPCode(code);
        cpProfileService.saveInstitute(institute);
        $location.path('/addVoucher');
    }
    
    function updateCPProfile() {
        cpProfileService.saveUserID(userid);
        $location.path('/updateCPProfile');
    }
};
