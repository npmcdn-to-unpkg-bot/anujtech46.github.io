var profile = angular.module('profile');

profile.factory('userProfileFactory', function($log, $routeParams, user, $http, $log, $location) {
    var factory  ={};
    var userProfile = {};
    
    
    factory.setUserProfile = function(profile) {
        $log.info("inside setUserProfile");
        userProfile = profile;
        return ;
    };
    
    factory.getUserProfile = function() {
        return userProfile;
    };
    
    factory.apiR = function(callback) {
        
        var userid = $routeParams.userid;
        var url = user.apiEndPoint + "get/profile/"+userid;
        
        $log.info("call url "+ url);
        
        var config = {
            headers : {
                'token' : user.token
            }
        };
        
        $http.get(url, config).
            success(function(data, status, headers, config) {
            if(data.status.code === 303000) {
                $log.info("get profile successfully", data);
                return callback(null, data.profile);
            } else {
                $log.error("unable to get profile due to",data.status);
                return callback(true, null);
            }
        }).
        error(function(data, status, headers, config) {
            // never reached even for 400/500 status codes
            return callback(true, null);
        });
    };
    return factory;
});

profile.controller('profileCtrl', function($scope, apiService, $http) {
    
    $scope.username = apiService.getUsername();
    
});
profile.controller('showProfileCtrl', function($scope, $log, $location, userProfileFactory) {
    
    $log.info("showProfileCtrl");
    
    userProfileFactory.apiR(function(err, res) {
        if(err) {
            $scope.message = "unable to get profile";
            return ;
        } else {
            if(res.role === "student") {
                $log.info("set student data");
                userProfileFactory.setUserProfile(res);
                $location.path('/profile/student');
            } if(res.role === "educator" ) {
                $log.info("set educator data");
                userProfileFactory.setUserProfile(res);
                $location.path('/profile/educator');
            } if(res.role === "channelpartner") {
                $log.info("set channelpartner data");
                userProfileFactory.setUserProfile(res);
                $location.path('/profile/channelpartner');
            } 
        }
    });
});

profile.controller('showStudnetProfileCtrl', function($scope, $log, userProfileFactory) {
    $log.info("inside showStudnetProfileCtrl");
    var profiles = userProfileFactory.getUserProfile();
    
    $log.info("profile", profiles);
    $scope.fullname = profiles.fullname ; 
    $scope.gender = profiles.gender ; 
    $scope.school = profiles.school ; 
    $scope.grade = profiles.grade ; 
    $scope.dob = profiles.dob ; 
    $scope.v1username = profiles.v1username ; 
    $scope.modifiedon = profiles.modifiedon ; 
    $scope.createdon = profiles.createdon ; 
    $scope.location = profiles.location ;
});

profile.controller('showEducatorProfileCtrl', function($scope, userProfileFactory) {
    var profiles = userProfileFactory.getUserProfile();
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
});	

profile.controller('showCPProfileCtrl', function($scope, userProfileFactory) {
    var profiles = userProfileFactory.getUserProfile();
    $scope.fullname = profiles.fullname ; 
    $scope.gender = profiles.gender ; 
    $scope.Qualification = profiles.Qualification ; 
    $scope.Institute = profiles.Institute ; 
    $scope.dob = profiles.dob ; 
    $scope.Roles = profiles.Roles ;
    $scope.internal = profiles.internal ;
    $scope.code = profiles.cpcode ; 
    $scope.Headline = profiles.Headline ; 
    $scope.modifiedon = profiles.modifiedon ; 
    $scope.createdon = profiles.createdon ; 
    $scope.location = profiles.location ; 
});			
