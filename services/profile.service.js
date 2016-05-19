angular.module('profile')
        .factory('userProfileFactory', userProfileFactory);

userProfileFactory.$inject = ['$log', '$routeParams', 'apiService', '$log'];
function userProfileFactory($log, $routeParams, apiService, $log) {
    var factory  ={
        getUserProfile : getUserProfile
//        apiR           : apiR
    };
//    var userProfile = {};
    
    
//    function setUserProfile(profile) {
//        $log.info("inside setUserProfile");
//        userProfile = profile;
//        return ;
//    };
//    
//    function getUserProfile() {
//        return userProfile;
//    };

    
    function getUserProfile(callback) {
        
        var userid = $routeParams.userid;
        var url = apiService.getApiEndPoint() + "get/profile/"+userid;
        
        $log.info("call url "+ url);
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            $log.info("res", res);
            return callback(err, res);
        });
    };
    return factory;
};