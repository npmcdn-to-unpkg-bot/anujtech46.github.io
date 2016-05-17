angular.module('profile')
        .controller('userProfileFactory', userProfileFactory);

userProfileFactory.$inject = [('$log', '$routeParams', 'apiService', '$http', '$log', '$location')];
function userProfileFactory($log, $routeParams, apiService, $http, $log, $location) {
    var factory  ={
        setUserProfile : setUserProfile,
        getUserProfile : getUserProfile,
        apiR           : apiR
    };
    var userProfile = {};
    
    
    function setUserProfile(profile) {
        $log.info("inside setUserProfile");
        userProfile = profile;
        return ;
    };
    
    function getUserProfile() {
        return userProfile;
    };
    
    function apiR(callback) {
        
        var userid = $routeParams.userid;
        var url = apiService.getApiEndPoint() + "get/profile/"+userid;
        
        $log.info("call url "+ url);
        
        var config = {
            headers : {
                'token' : apiService.getToken()
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
};