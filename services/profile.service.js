angular.module('profile')
        .factory('userProfileFactory', userProfileFactory)
        .service('cpProfileService', cpProfileService)
        .service('educatorProfileService', educatorProfileService);

userProfileFactory.$inject = ['$log', 'apiService', '$log'];
function userProfileFactory($log, apiService, $log) {
    
    var factory  ={
        getStudentProfileWithToken  : getStudentProfileWithToken,
        getEducatorProfileWithToken : getEducatorProfileWithToken,
        getCPProfile                : getCPProfile
    };
    
    function getStudentProfileWithToken(userid, callback) {

        getProfile(userid, function(err, profile) {
            if(profile.status.code === 303000) {
                getSession(userid, function(err, sessions) {
                    if(sessions.status.code === 303000) {
                        getDevice(userid, function(err, devices) {
                            if(devices.status.code === 303000) {
                                return callback(err, profile, sessions, devices);
                            } else {
                                return callback(err, profile, sessions, null);
                            }
                        });
                    } else {
                        getDevice(userid, function(err, devices) {
                            if(devices.status.code === 303000) {
                                return callback(err, profile, null, devices);
                            } else {
                                return callback(err, profile, null, null);
                            }
                        });
                    }
                });
            } else {
                return callback(err, profile, null, null);
            }
        });
    };
    
    function getEducatorProfileWithToken(userid, callback) {
        
        getProfile(userid, function(err, profile) {
            if(profile.status.code === 303000) {
                getDevice(userid, function(err, devices) {
                    if(err) {
                        return callback(err, profile, null);
                    }
                    if(devices.status.code === 303000) {                        
                        return callback(err, profile, devices);
                    } else {
                        return callback(err, profile, null);
                    }
                });
            } else {
                return callback(err, profile, null);
            }
        });
    };
    
    function getCPProfile(userid, callback) {
        
        getProfile(userid, function(err, profile) {
            return callback(err, profile);

        });
    };
    
    function getProfile(userid, callback) {
        
        var url = apiService.getApiEndPoint() + "get/profile/"+userid;
        
        $log.info("call url "+ url);
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    }
    
    function getDevice(userid, callback) {
        var url = apiService.getApiEndPoint() + "get/device/"+userid;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getSession(userid, callback) {
        var url = apiService.getApiEndPoint() + "get/session/"+userid;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    return factory;
};

cpProfileService.$inject = [];
function cpProfileService() {
    var code = '';
    var userid = '';
    var institute = '';
    
    this.saveCPCode = function(code) {
        this.code = code; 
        return;
    };
    
    this.getCPCode= function() {
        return this.code;
    };
    
    this.saveUserID = function(userid) {
        this.userid = userid;
        return;
    };
    
    this.getUserID = function(){
        return this.userid;
    };
    
    this.saveInstitute = function(institute) {
        this.institute = institute;
        return;
    };
    
    this.getInstitute = function(){
        return this.institute;
    };
}

educatorProfileService.$inject = ['$log'];
function educatorProfileService($log) {
    console.log('Preofile servic');
    var userid = '';
    var email = '';
    var headline = '';
    var roles = '';
    var skills = '';
    var internal = '';
    
    this.saveUserID = function(userid) {
        $log.info("set userid", userid);
        this.userid = userid;
        return;
    };
    
    this.getUserID = function(){
        return this.userid;
    };
    
    this.saveEmail = function(email) {
        $log.info("set email", email);
        this.email = email;
        return;
    };
    
    this.getEmail = function(){
        $log.info("return email", this.email);
        return this.email;
    };
    
    this.saveHeadline = function(headline) {
        $log.info("set headline", headline);
        this.headline = headline;
        return;
    };
    
    this.getHeadline = function(){
        return this.headline;
    };
    
    this.saveRoles = function(roles) {
        $log.info("set roles", roles);
        this.roles = roles;
        return;
    };
    
    this.getRoles = function(){
        return this.roles;
    };
    
    this.saveSkills = function(skills) {
        $log.info("set skills", skills);
        this.skills = skills;
        return;
    };
    
    this.getSkills = function(){
        return this.skills;
    };
    
    this.saveInternal = function(internal) {
        $log.info("set internal", internal);
        this.internal = internal;
        return;
    };
    
    this.getInternal = function(){
        return this.internal;
    };  
}