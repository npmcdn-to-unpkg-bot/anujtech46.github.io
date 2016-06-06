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
                    $log.info("devices", devices);
                    $scope.devices = devices;
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

ShowEducatorProfileCtrl.$inject = ['$scope', '$log', '$routeParams', 'toastr', 'userProfileFactory'];
function ShowEducatorProfileCtrl($scope, $log, $routeParams, toastr, userProfileFactory) {
    
    var userid = $routeParams.userid;

    userProfileFactory.getEducatorProfileWithToken(userid, function(err, res, devices) {
        if(res) {
            if(res.status.code === 303000) {
                $log.info("getting res of user", res);
                var profiles = res.profile;
                $scope.fullname = profiles.fullname ; 
                $scope.gender = profiles.gender ; 
                $scope.Qualification = profiles.Qualification ; 
                $scope.Institute = profiles.Institute ; 
                $scope.dob = profiles.dob ; 
                $scope.Roles = profiles.Roles ;
                $scope.internal = profiles.internal ;
                $scope.Skills = profiles.Skills ; 
                $scope.Headline = profiles.Headline ; 
                $scope.modifiedon = profiles.modifiedon ; 
                $scope.createdon = profiles.createdon ; 
                $scope.location = profiles.location ; 
                if(devices) {
                    $log.info("devices", devices);
                    $scope.devices = devices;
                }
                return;
            } else {
                toastr.error('Invalid request');
            }
        } else {
            toastr.error('Server not working');
        }
    });
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
