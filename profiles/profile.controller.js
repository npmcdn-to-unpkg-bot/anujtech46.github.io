var profile = angular.module('profile');

profile.factory('userProfileFactory', function($log) {
    var factory  ={};
    var userProfile = {};
    
    factory.setUserProfile = function(profile) {
        $log.info("inside setUserProfile");
        userProfile = profile;
        return ;
    };
    $log.info("userProfile", userProfile);
    factory.getUserProfile = function() {
        return userProfile;
    };
    return factory;
});

profile.controller('profileCtrl', function($scope, user, $http) {
    
    $scope.username = user.username;
    
});
profile.controller('showProfileCtrl', function($scope, user, $http, $log, $location, userProfileFactory, $routeParams) {
    
    $log.info("showProfileCtrl");
    
    var userid = $routeParams.userid;
    var roles  = $routeParams.roles;
    
    var url = user.apiEndPoint + "get/profile/"+userid;
    $log.info("url", url);
    
    var data = {
        userid: userid
    };
    
    var config = {
        params: data,
        headers : {
            'token' : user.token
        }
    };
    
    $http.get(url, config).then(function(res, err) {
        $log.info("profile",res.data);
        if(res.data) {
            if(res.data.role === "student") {
                $log.info("set student data");
                userProfileFactory.setUserProfile(res.data);
                $location.path('/profile/student');
            } if(res.data.roles[0] === "educator" || res.data.roles[1] === "educator"){
                userProfileFactory.setUserProfile(res.data);
                $location.path('/profile/educator');
            }
        } if(err) {
            $scope.err = err;
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
