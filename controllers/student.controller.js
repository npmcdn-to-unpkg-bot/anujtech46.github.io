angular.module('student')
    .controller('UpdateStudentCtrl', UpdateStudentCtrl)
    .controller('DeleteStudentCtrl', DeleteStudentCtrl)
    .controller('ReferralUserCtrl', ReferralUserCtrl)
    .controller('UgradeUserCtrl', UgradeUserCtrl)
    .controller('GetUserWithCredits', GetUserWithCredits)
    .controller('GetStudentProfileCtrl', GetStudentProfileCtrl)
    .controller('SendEmailToAdminCtrl', SendEmailToAdminCtrl)
    .controller('AddCreditsCtrl', AddCreditsCtrl);
    
UpdateStudentCtrl.$inject = ['$scope', 'studentFactory', 'toastr'];

function UpdateStudentCtrl($scope, studentFactory, toastr) {

    $scope.addCredits = function() {
    
        var data = {
            'email': $scope.st.email,
            'appid' : $scope.st.appid
        };

        studentFactory.addCredits(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("Add credits successfully");
                    $scope.st = '';
                    $scope.student.$setPristine();
                } else {
                    toastr.error('Invalid Credentials', 'Unable to add credits');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

DeleteStudentCtrl.$inject = ['$scope', 'studentFactory', 'toastr'];

function DeleteStudentCtrl($scope, studentFactory, toastr) {
    
    $scope.deleteStudent = function() {
        
        var data = {
            'email': $scope.st.email,
            'appid' : $scope.st.appid
        };

        studentFactory.deleteStudent(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.success("delete student successfully");
                    $scope.st = '';
                    $scope.student.$setPristine();
                } else {
                    toastr.error('Invalid Credentials', 'Unable to delete students');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

ReferralUserCtrl.$inject = ['$scope', 'studentFactory', 'toastr', '$location'];

function ReferralUserCtrl($scope, studentFactory, toastr, $location) {
    
    $scope.getProfiles = getProfiles;
    
    studentFactory.getReferral(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                if(res.count === 0) {
                    $scope.count = res.count;
                    $scope.hidetable = true;
                    return;
                }
                $scope.referralUsers = res.referralUsers;
                $scope.count = res.count;
            } else {
                toastr.error('Invalid Credentials', 'Unable to get purchase products');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    function getProfiles(userid) {
        $location.path('/profile/student/'+userid);
    }
};

UgradeUserCtrl.$inject = ['$scope', 'studentFactory', 'toastr', '$location'];

function UgradeUserCtrl($scope, studentFactory, toastr, $location) {
    
    $scope.getProfiles = getProfiles;
    
    studentFactory.getUgradeUser(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                if(res.count === 0) {
                    $scope.count = res.count;
                    $scope.hidetable = true;
                    return;
                }
                $scope.upgradeUsers = res.upgradeUsers;
                $scope.count = res.count;
            } else {
                toastr.error('Invalid Credentials', 'Unable to get purchase products');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    function getProfiles(userid) {
        $location.path('/profile/student/'+userid);
    }
};

GetUserWithCredits.$inject = ['$scope','PagerService', 'studentFactory', 'toastr', '$log', '$location'];

function GetUserWithCredits($scope, PagerService, studentFactory, toastr, $log, $location) {

    $scope.showTable = false;
    $scope.setUsers = function() {
        $scope.pager        = {};
        $scope.setPage      = setPage;
        $scope.getProfiles  = getProfiles;
        var data = {};
        var date        = new Date();
        $scope.year     = date.getFullYear();
        $scope.month    = date.getMonth();
        $scope.day      = date.getDate();
        
        data = {
            "startdate" : $scope.startdate,
            "enddate"   : $scope.enddate,
            "questions" : $scope.questions
        };
        initController();

        function initController() {
            // initialize to page 1
             $scope.setPage(1);
        }

        function setPage(page) {
            if (page < 1 || page >  $scope.pager.totalPages) {
                return;
            }

            studentFactory.getUserWithCredits(page, data, function(err, res) {
                if(res) {
                    if(res.status.code === 303000) {
                        
                        $log.info("getting res", res.users.user);
                        $scope.pager = PagerService.GetPager(res.users.count, page, res.users.pageSize);
                        $scope.users =  res.users.user;
                        $scope.count = res.users.count;
                        $scope.showTable = true;
                        return;
                    } else {
                        toastr.error('Invalid request');
                    }
                } else {
                    toastr.error('Server not working');
                }
            }); 
        }

        function getProfiles(userid) {
            $location.path('/profile/student/'+userid);
        }
    };
}

GetStudentProfileCtrl.$inject = ['$scope', 'studentFactory', 'toastr', '$location'];

function GetStudentProfileCtrl($scope, studentFactory, toastr, $location) {
    
    $scope.getProfiles  = getProfiles;
    $scope.hideform     = true;
    
    $scope.getUserProfile = function() {
        var data = {};
        
        if($scope.st.email) {
            data.email = $scope.st.email;
        }
        if($scope.st.fullname) {
            data.fullname = $scope.st.fullname;
        }
        if($scope.st.email && $scope.st.fullname) {
            toastr.error('Invalid Credentials', 'Please send email or fullname');
            return;
        }
        studentFactory.getStudentProfile(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    console.log(res.count);
                    if(res.count === 0) {
                        toastr.success('User not exit', 'Email or fullname not exist');
                        return;
                    }
                    $scope.st = '';
                    $scope.student.$setPristine();
                    $scope.hideform     = false;
                    $scope.users = res.users;
                } else {
                    toastr.error('Invalid Credentials', 'Unable to delete students');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
    function getProfiles(userid) {
            $location.path('/profile/student/'+userid);
        }
};

/**
 * 
 * @type Array
 */
SendEmailToAdminCtrl.$inject = ['$scope', 'studentFactory', 'toastr', '$log'];

/**
 * Send email to admin all the registered student in between dates 
 * and with credits and after that if admin want to add credits then add credits
 * @param {object} $scope
 * @param {factoryObject} studentFactory
 * @param {module} toastr
 * @param {module} $log
 * @returns {undefined}
 */
function SendEmailToAdminCtrl($scope, studentFactory, toastr, $log) {
    
    $scope.showForm = true;
    $scope.showMessage = true;
    $scope.setUsers = function() {
        var data = {};
        var date        = new Date();
        $scope.year     = date.getFullYear();
        $scope.month    = date.getMonth();
        $scope.day      = date.getDate();
        
        data = {
            "startdate" : $scope.startdate,
            "enddate"   : $scope.enddate,
            "questions" : $scope.questions
        };
        
        if($scope.register.sendemail) {
            data.sendemail = true;
        }
        
        studentFactory.sendUsersDetailToAdmin(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.showForm = false;
                    $scope.showMessage = false;
                    $scope.usersCount = res.count;
                    toastr.info("Add Users into file");
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    };
}

/**
 * 
 * @type Array
 */
AddCreditsCtrl.$inject = ['$scope', 'studentFactory', 'toastr', '$log'];

/**
 * add credits according to their question asked
 * @param {object} $scope
 * @param {factoryObject} studentFactory
 * @param {module} toastr
 * @param {module} $log
 * @returns {undefined}
 */
function AddCreditsCtrl($scope, studentFactory, toastr, $log) {

    $scope.showForm = true;
    $scope.showMessage = true;
    $scope.addCredits = function() {
        var data = {};
        var date        = new Date();
        $scope.year     = date.getFullYear();
        $scope.month    = date.getMonth();
        $scope.day      = date.getDate();
        
        data = {
            "startdate" : $scope.startdate,
            "enddate"   : $scope.enddate,
            "questions" : $scope.questions
        };

        studentFactory.addCreditsToUsers(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    toastr.info("Add Credits to users");
                    $scope.showForm = false;
                    $scope.showMessage = false;
                    $scope.usersCount = res.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    };
}
