angular.module('profile')
        .controller('ProfileCtrl', ProfileCtrl);
//        .controller('ShowProfileCtrl', ShowProfileCtrl)
//        .controller('ShowStudnetProfileCtrl', ShowStudnetProfileCtrl)
//        .controller('ShowEducatorProfileCtrl', ShowEducatorProfileCtrl)
//        .controller('ShowCPProfileCtrl', ShowCPProfileCtrl);

ProfileCtrl.$inject = [('$scope', 'apiService')];
function ProfileCtrl($scope, apiService) {
    
    $scope.username =  "anujtech";
    
};

//ShowProfileCtrl.$inject = [('$scope', '$log', '$location', 'userProfileFactory')];
//function ShowProfileCtrl($scope, $log, $location, userProfileFactory) {
//    
//    $log.info("showProfileCtrl");
//    
//    userProfileFactory.apiR(function(err, res) {
//        if(err) {
//            $scope.message = "unable to get profile";
//            return ;
//        } else {
//            if(res.role === "student") {
//                $log.info("set student data");
//                userProfileFactory.setUserProfile(res);
//                $location.path('/profile/student');
//            } if(res.role === "educator" ) {
//                $log.info("set educator data");
//                userProfileFactory.setUserProfile(res);
//                $location.path('/profile/educator');
//            } if(res.role === "channelpartner") {
//                $log.info("set channelpartner data");
//                userProfileFactory.setUserProfile(res);
//                $location.path('/profile/channelpartner');
//            } 
//        }
//    });
//};
//
//ShowStudnetProfileCtrl.$inject = [('$scope', '$log', '$location', 'userProfileFactory')];
//function ShowStudnetProfileCtrl($scope, $log, $location, userProfileFactory) {
//    $log.info("inside showStudnetProfileCtrl");
//    var profiles = userProfileFactory.getUserProfile();
//    
//    $log.info("profile", profiles);
//    $scope.fullname = profiles.fullname ; 
//    $scope.gender = profiles.gender ; 
//    $scope.school = profiles.school ; 
//    $scope.grade = profiles.grade ; 
//    $scope.dob = profiles.dob ; 
//    $scope.v1username = profiles.v1username ; 
//    $scope.modifiedon = profiles.modifiedon ; 
//    $scope.createdon = profiles.createdon ; 
//    $scope.location = profiles.location ;
//};
//
//ShowEducatorProfileCtrl.$inject = [('$scope', 'userProfileFactory')];
//function ShowEducatorProfileCtrl($scope, userProfileFactory) {
//    var profiles = userProfileFactory.getUserProfile();
//    $scope.fullname = profiles.fullname ; 
//    $scope.gender = profiles.gender ; 
//    $scope.Qualification = profiles.Qualification ; 
//    $scope.Institute = profiles.Institute ; 
//    $scope.dob = profiles.dob ; 
//    $scope.Roles = profiles.Roles ;
//    $scope.internal = profiles.internal ;
//    $scope.Skills = profiles.Skills ; 
//    $scope.Headline = profiles.Headline ; 
//    $scope.modifiedon = profiles.modifiedon ; 
//    $scope.createdon = profiles.createdon ; 
//    $scope.location = profiles.location ; 
//};	
//
//ShowCPProfileCtrl.$inject = [('$scope', 'userProfileFactory')];
//function ShowCPProfileCtrl($scope, userProfileFactory) {
//    var profiles = userProfileFactory.getUserProfile();
//    $scope.fullname = profiles.fullname ; 
//    $scope.gender = profiles.gender ; 
//    $scope.Qualification = profiles.Qualification ; 
//    $scope.Institute = profiles.Institute ; 
//    $scope.dob = profiles.dob ; 
//    $scope.Roles = profiles.Roles ;
//    $scope.internal = profiles.internal ;
//    $scope.code = profiles.cpcode ; 
//    $scope.Headline = profiles.Headline ; 
//    $scope.modifiedon = profiles.modifiedon ; 
//    $scope.createdon = profiles.createdon ; 
//    $scope.location = profiles.location ; 
//};
