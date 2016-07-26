/**
 * 
 * @param {type} param1
 * @param {type} param2
 */
angular.module('channelpartner')
        .controller('RegisterCPCtrl', RegisterCPCtrl)
        .controller('ShowAllCPCtrl', ShowAllCPCtrl)
        .controller('ShowAllPartnerAPPCtrl', ShowAllPartnerAPPCtrl)
        .controller('AddPartnerAPPCtrl', AddPartnerAPPCtrl)
        .controller('UpdatePartnerAPPCtrl', UpdatePartnerAPPCtrl)
        .controller('AddAppCredentialsCtrl', AddAppCredentialsCtrl)
        .controller('ShowAppCredentialsCtrl', ShowAppCredentialsCtrl);

/**
 * 
 * @type Array
 */
RegisterCPCtrl.$inject = ['$scope', 'cpFactory', 'toastr', '$location'];
/**
 * register new channel partner
 * @param {type} $scope
 * @param {type} cpFactory
 * @param {type} toastr
 * @param {type} $location
 * @returns {undefined}
 */
function RegisterCPCtrl($scope, cpFactory, toastr, $location) {
    
    $scope.registerCP =  function() {
        var data = {
            email : $scope.cp.email,
            fullname : $scope.cp.fullname,
            appid : $scope.cp.appid,
            password : $scope.cp.password,
            onboard : "CUSTOM",
            institute : $scope.cp.institute
        };
        
        cpFactory.doRegister(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.cp = '';
                    $scope.register.$setPristine();
                    $location.path('/showCP');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to register');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

/**
 * Inject all the required module
 * @type Array
 */
ShowAllCPCtrl.$inject = ['$scope', 'toastr', 'cpFactory', '$location'];
/**
 * Show all channel parters
 * @param {object} $scope
 * @param {module} toastr
 * @param {module} cpFactory
 * @param {module} $location
 */
function ShowAllCPCtrl($scope, toastr, cpFactory, $location) {
    
    $scope.getProfiles = getProfiles;
  
    cpFactory.getAllCP(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                if(res.profiles.count === 0) {
                    $scope.count = res.profiles.count;
                } else {
                    $scope.count = res.profiles[0].count;
                    $scope.users = res.profiles;
                }
            } else {
                toastr.error('Invalid Credentials', 'Unable to find');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    function getProfiles(userid, roles) {
        if(roles[0] === 'channelpartner') {
            $location.path('/profile/channelpartner/'+userid);
        } else {
            toastr.error('Invalid request');
        }
    }
};

/**
 * Inject all the required module
 * @type Array
 */
ShowAllPartnerAPPCtrl.$inject = ['$scope', 'toastr', 'cpFactory', '$location', 'cpService', '$route'];
/**
 * 
 * @param {type} $scope
 * @param {type} toastr
 * @param {type} cpFactory
 * @param {type} $location
 * @param {type} cpService
 * @param {type} $route
 * @returns {undefined}
 */
function ShowAllPartnerAPPCtrl($scope, toastr, cpFactory, $location, cpService, $route) {
    
    $scope.showTable    = false;
    cpFactory.getAllPartnerApp(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                if(res.partnersapp.length === 0) {
                    $scope.count = res.partnersapp.length;
                } else {
                    $scope.showTable = true;
                    $scope.count    = res.partnersapp.length;
                    $scope.partners = res.partnersapp;
                }
            } else {
                toastr.error('Invalid Credentials', 'Unable to find');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    $scope.addPartner = addPartner;
    function addPartner() {
        $location.path('/addPartnerApp');
    }
    
    $scope.updatePartner = updatePartner;
    function updatePartner(appid) {
        cpService.saveAppID(appid);
        $location.path('/updatePartnerApp');
    }
    
    $scope.deletePartner = deletePartner;
    function deletePartner(appid) {
        var x = confirm("Are you sure you want to delete?");
        if(x) { 
            cpFactory.deletePartnerApp(appid, function(err, res) {
                if(res) {
                    if(res.status.code === 303000) {
                        toastr.success("delete partner app successfully");
                        $route.reload();
                    } else {
                        toastr.error('Invalid Credentials', 'Unable to delete Partners app');
                    }
                } else {
                    toastr.error('Server not working');
                }
            });
        } else { 
            $location.path('/showPartner');
            return false;
        }
    }
};

/**
 * 
 * @type Array
 */
AddPartnerAPPCtrl.$inject = ['$scope', 'cpFactory', 'toastr', '$location'];
/**
 * 
 * @param {type} $scope
 * @param {type} cpFactory
 * @param {type} toastr
 * @param {type} $location
 * @returns {undefined}
 */
function AddPartnerAPPCtrl($scope, cpFactory, toastr, $location) {
    
    $scope.appPartner = function() {
        
        var data = {
            appid       : $scope.partnerapp.appid,
            slalevel    : $scope.partnerapp.slalevel,
            description : $scope.partnerapp.description
        };
        
        cpFactory.addPartnerApp(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("add Partner App successfully");
                    $location.path('/showPartner');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add partner product');
                } 
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

/**
 * 
 * @type Array
 */
UpdatePartnerAPPCtrl.$inject = ['$scope', 'cpFactory', 'toastr', '$location', 'cpService'];

function UpdatePartnerAPPCtrl($scope, cpFactory, toastr, $location, cpService) {
    
    var appid = cpService.getAppID();
    if(!appid) {
        toastr.error('Invalid Credentials');
        return ;
    }
    cpFactory.getPartnerAppByID(appid, function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.partnerapp = {
                    appid       : res.partnerapp.appid,
                    slalevel    : res.partnerapp.slalevel,
                    description : res.partnerapp.description
                };
            } else {
                toastr.error('Invalid Credentials', 'Unable to get partner product');
                return ;
            }
        } else {
            toastr.error('Server not working');
            return ;
        }
    });
    
    $scope.updatePartner = updatePartner;
    function updatePartner() {
        var data = {
            appid: $scope.partnerapp.appid
        };
        if($scope.partnerapp.slalevel) {
            data.slalevel = $scope.partnerapp.slalevel;
        }
        if($scope.partnerapp.description) {
            data.description = $scope.partnerapp.description;
        }
        cpFactory.updatePartnerApp(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("update partner successfully");
                    $location.path('/showPartner');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to update partner product');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

/**
 * 
 * @type Array
 */
AddAppCredentialsCtrl.$inject = ['$scope', 'cpFactory', 'toastr', '$location'];
/**
 * 
 * @param {type} $scope
 * @param {type} cpFactory
 * @param {type} toastr
 * @param {type} $location      
 * @returns {undefined}
 */
function AddAppCredentialsCtrl($scope, cpFactory, toastr, $location) {
    
    $scope.addAppCredential = function() {
        
        var data = {
            appid       : $scope.apps.appid,
            description : $scope.apps.description
        };
        
        cpFactory.addAppCredentials(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("add App Credentials successfully");
                    $location.path('/showAppCredentials');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add Credentials');
                } 
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

/**
 * Inject all the required module
 * @type Array
 */
ShowAppCredentialsCtrl.$inject = ['$scope', 'toastr', 'cpFactory', '$location', 'cpService', '$route'];
/**
 * 
 * @param {type} $scope
 * @param {type} toastr
 * @param {type} cpFactory
 * @param {type} $location
 * @param {type} cpService
 * @param {type} $route
 * @returns {undefined}
 */
function ShowAppCredentialsCtrl($scope, toastr, cpFactory, $location, cpService, $route) {
    
    $scope.showTable    = false;
    cpFactory.getAllAppCredentials(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                if(res.apps.length === 0) {
                    $scope.count = res.apps.length;
                } else {
                    $scope.showTable = true;
                    $scope.count    = res.apps.length;
                    $scope.apps     = res.apps;
                }
            } else {
                toastr.error('Invalid Credentials', 'Unable to find');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    $scope.addAppCredential = addAppCredential;
    function addAppCredential() {
        $location.path('/addAppCredentials');
    }
    
    $scope.deleteAppCredential = deleteAppCredential;
    function deleteAppCredential(appid, secretid) {
        var x = confirm("Are you sure you want to delete?");
        if(x) { 
            var data = {
                appid       : appid,
                secretid    : secretid
            };
            cpFactory.deleteAppCredentials(data, function(err, res) {
                if(res) {
                    if(res.status.code === 303000) {
                        toastr.success("delete app credential successfully");
                        $route.reload();
                    } else {
                        toastr.error('Invalid Credentials', 'Unable to delete app credential');
                    }
                } else {
                    toastr.error('Server not working');
                }
            });
        } else { 
            $location.path('/showAppCredentials');
            return false;
        }
    }
};
