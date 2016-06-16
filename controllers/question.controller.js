angular.module('question')
    .controller('AQCtrl', AQCtrl)
    .controller('MQCtrl', MQCtrl)
    .controller('SQCtrl', SQCtrl)
    .controller('EQCtrl', EQCtrl)
    .controller('RepeatUserSessionCtrl', RepeatUserSessionCtrl)
    .controller('AllRequestedSessionCtrl', AllRequestedSessionCtrl)
    .controller('AllStartedSessionCtrl', AllStartedSessionCtrl)
    .controller('AllRatingLT2Ctrl', AllRatingLT2Ctrl)
    .controller('AllRatingGT4Ctrl', AllRatingGT4Ctrl);
    
AQCtrl.$inject = ['$scope', 'questionFactory', 'toastr'];

function AQCtrl($scope, questionFactory, toastr) {

    questionFactory.getAllSession(function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.totalQuestion = res.count;
                } else {
                    toastr.error('Invalid Credentials', 'Unable to find question count');
                }
            } else {
                toastr.error('Server not working');
            }
    });
};


MQCtrl.$inject = ['$scope', 'questionFactory', 'toastr'];

function MQCtrl($scope, questionFactory, toastr) {
    
    var data = {
        subject : "maths"
    };
    
    questionFactory.getSubjectSession(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.mathsQuestion = res.count;
                } else {
                    toastr.error('Invalid Credentials', 'Unable to find maths count');
                }
            } else {
                toastr.error('Server not working');
            }
    });
};

SQCtrl.$inject = ['$scope', 'questionFactory', 'toastr'];

function SQCtrl($scope, questionFactory, toastr) {
    
    var data = {
        subject : "science"
    };
    
    questionFactory.getSubjectSession(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.scienceQuestion = res.count;
                } else {
                    toastr.error('Invalid Credentials', 'Unable to find science count');
                }
            } else {
                toastr.error('Server not working');
            }
    });
};

EQCtrl.$inject = ['$scope', 'questionFactory', 'toastr'];

function EQCtrl($scope, questionFactory, toastr) {
    
    var data = {
        subject : "english"
    };
    
    questionFactory.getSubjectSession(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.englishQuestion = res.count;
                } else {
                    toastr.error('Invalid Credentials', 'Unable to find english count');
                }
            } else {
                toastr.error('Server not working');
            }
    });
};

RepeatUserSessionCtrl.$inject = ['$scope', 'questionFactory', 'toastr', '$location'];

function RepeatUserSessionCtrl($scope, questionFactory, toastr, $location) {
    
    $scope.getProfiles = getProfiles;
    
    questionFactory.getRepeatUserSession(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                $scope.repeatUserCount = res.count;
                $scope.users = res.sessions;
            } else {
                toastr.error('Invalid Credentials', 'Unable to find Repeat User count');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    function getProfiles(userid) {
        $location.path('/profile/student/'+userid);
    }
};

AllStartedSessionCtrl.$inject = ['$scope','PagerService', 'questionFactory', 'toastr', '$log', '$location'];

function AllStartedSessionCtrl($scope, PagerService, questionFactory, toastr, $log, $location) {
    
    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.getProfiles = getProfiles;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        questionFactory.getStartedSessions(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.sessions.sessions);
                    $scope.pager = PagerService.GetPager(res.sessions.count, page, res.sessions.pageSize);
                    $scope.sessionCount = res.sessions.count;
                    $scope.sessions = res.sessions.sessions;
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
}

AllRequestedSessionCtrl.$inject = ['$scope','PagerService', 'questionFactory', 'toastr', '$log', '$location'];

function AllRequestedSessionCtrl($scope, PagerService, questionFactory, toastr, $log, $location) {
    
    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.getProfiles = getProfiles;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        questionFactory.getRequestedSessions(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.sessions.sessions);
                    $scope.pager = PagerService.GetPager(res.sessions.count, page, res.sessions.pageSize);
                    $scope.sessionCount = res.sessions.count;
                    $scope.sessions = res.sessions.sessions;
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
}
AllRatingLT2Ctrl.$inject = ['$scope','PagerService', 'questionFactory', 'toastr', '$log', '$location'];

function AllRatingLT2Ctrl($scope, PagerService, questionFactory, toastr, $log, $location) {
    
    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.getProfiles = getProfiles;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        questionFactory.getRatingLT2(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.ratings.ratings);
                    $scope.pager = PagerService.GetPager(res.ratings.count, page, res.ratings.pageSize);
                    $scope.ratingCount = res.ratings.count;
                    $scope.ratings = res.ratings.ratings;
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
}

AllRatingGT4Ctrl.$inject = ['$scope','PagerService', 'questionFactory', 'toastr', '$log', '$location'];

function AllRatingGT4Ctrl($scope, PagerService, questionFactory, toastr, $log, $location) {
    
    $scope.pager = {};
    $scope.setPage = setPage;
    $scope.getProfiles = getProfiles;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        questionFactory.getRatingGT4(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.ratings.ratings);
                    $scope.pager = PagerService.GetPager(res.ratings.count, page, res.ratings.pageSize);
                    $scope.ratingCount = res.ratings.count;
                    $scope.ratings = res.ratings.ratings;
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
}