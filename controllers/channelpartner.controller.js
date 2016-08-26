/**
 * 
 * @param {type} param1
 * @param {type} param2
 */
angular.module('channelpartner')
        .controller('RegisterCPCtrl', RegisterCPCtrl)
        .controller('ShowAllCPCtrl', ShowAllCPCtrl)
        .controller('AddAppCredentialsCtrl', AddAppCredentialsCtrl)
        .controller('ShowAppCredentialsCtrl', ShowAppCredentialsCtrl)
        .controller('ShowAllPartnerAdminCtrl', ShowAllPartnerAdminCtrl)
        .controller('AddPartnerAdminCtrl', AddPartnerAdminCtrl);

/**
 * 
 * @type Array
 */
RegisterCPCtrl.$inject = ['$scope', 'cpFactory', 'toastr', '$location', 'apiService'];
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
        
        var roles = [];
        
        if($scope.apps.step1 && $scope.apps.crowd1) {
            var data = {};
            data.step = $scope.apps.step1;
            data.crowd = $scope.apps.crowd1;
            roles.push(data);
        }
        if($scope.apps.step2 && $scope.apps.crowd2) {
            var data = {};
            data.step = $scope.apps.step2;
            data.crowd = $scope.apps.crowd2;
            roles.push(data);
        }
        if($scope.apps.step3 && $scope.apps.crowd3) {
            var data = {};
            data.step = $scope.apps.step3;
            data.crowd = $scope.apps.crowd3;
            roles.push(data);
        }
        if($scope.apps.step4 && $scope.apps.crowd4) {
            var data = {};
            data.step = $scope.apps.step4;
            data.crowd = $scope.apps.crowd4;
            roles.push(data);
        }
        
        var data = {
            appid       : $scope.apps.appid,
            description : $scope.apps.description,
            roles       : roles
        };
        console.log(data);
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
ShowAppCredentialsCtrl.$inject = ['$scope', 'toastr', 'cpFactory', '$location', '$route'];
/**
 * 
 * @param {type} $scope
 * @param {type} toastr
 * @param {type} cpFactory
 * @param {type} $location
 * @param {type} $route
 * @returns {undefined}
 */
function ShowAppCredentialsCtrl($scope, toastr, cpFactory, $location, $route) {
    
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

/**
 * 
 * @type Array
 */
AddPartnerAdminCtrl.$inject = ['$scope', 'cpFactory', 'toastr', '$location'];
/**
 * register new channel partner
 * @param {type} $scope
 * @param {type} cpFactory
 * @param {type} toastr
 * @param {type} $location
 * @returns {undefined}
 */
function AddPartnerAdminCtrl($scope, cpFactory, toastr, $location) {
    
    $scope.registerAP =  function() {
        
        var data = {
            email       : $scope.ap.email,
            fullname    : $scope.ap.fullname,
            appid       : $scope.ap.appid,
            password    : $scope.ap.password,
            onboard     : "CUSTOM"
        };
        
        cpFactory.addPartnerAdmin(data, function(err, res) {
            if(res && res.status) {
                if(res.status.code === 303000) {
                    $scope.ap = '';
                    $scope.register.$setPristine();
                    $location.path('/showPartnerAdmin');
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
ShowAllPartnerAdminCtrl.$inject = ['$scope', 'toastr', 'cpFactory', '$location', 'cpService', '$route'];
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
function ShowAllPartnerAdminCtrl($scope, toastr, cpFactory, $location, cpService, $route) {
    
    $scope.showTable    = false;
    cpFactory.getAllPartnerAdmin(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                if(res.users.length === 0) {
                    $scope.count = res.users.length;
                } else {
                    $scope.showTable = true;
                    $scope.count     = res.users.length;
                    $scope.users     = res.users;
                }
            } else {
                toastr.error('Invalid Credentials', 'Unable to find');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    $scope.addPartnerAdmin = addPartnerAdmin;
    function addPartnerAdmin() {
        $location.path('/addPartnerAdmin');
    }
    
    $scope.deletePartnerAdmin = deletePartnerAdmin;
    function deletePartnerAdmin(userid) {
        var x = confirm("Are you sure you want to delete?");
        if(x) { 
            cpFactory.deletePartnerAdmin(userid, function(err, res) {
                if(res) {
                    if(res.status.code === 303000) {
                        toastr.success("delete partner admin successfully");
                        $route.reload();
                    } else {
                        toastr.error('Invalid Credentials', 'Unable to delete Partners admin');
                    }
                } else {
                    toastr.error('Server not working');
                }
            });
        } else { 
            $location.path('/showPartnerAdmin');
            return false;
        }
    }
};