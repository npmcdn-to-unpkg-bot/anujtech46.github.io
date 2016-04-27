var profileModule = angular.module('profile',[]);

profileModule.factory('userProfile', function() {
    var userProfile = {
        fullname : '',
        gender : '',
        school  : ''
    };
    
    function setUserProfile(profile) {
        userProfile.fullname    = profile.fullname;
        userProfile.gender      = profile.gender;
        userProfile.school      = profile.school;
        return ;
    };
    
    function getUserProfile() {
        return userProfile;
    }
    
 });