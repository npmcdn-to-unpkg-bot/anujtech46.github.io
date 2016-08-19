angular.module('question')
    .controller('SessionDetailCtrl', SessionDetailCtrl)
    .controller('RepeatUserSessionCtrl', RepeatUserSessionCtrl)
    .controller('AllRequestedSessionCtrl', AllRequestedSessionCtrl)
    .controller('AllStartedSessionCtrl', AllStartedSessionCtrl)
    .controller('AllRatingLT2Ctrl', AllRatingLT2Ctrl)
    .controller('AllRatingGT4Ctrl', AllRatingGT4Ctrl);
          
SessionDetailCtrl.$inject = ['$scope', 'questionFactory', 'toastr' ];
    
function SessionDetailCtrl($scope, questionFactory, toastr) {
    
    $scope.classesmodel = [];
    $scope.classesdata = [
        {id: 1, label: "C6"},
        {id: 2, label: "C7"},
        {id: 3, label: "C8"},
        {id: 4, label: "C9"},
        {id: 5, label: "C10"},
        {id: 6, label: "C11"},
        {id: 7, label: "C12"}
    ];

    $scope.classessettings = {
        scrollableHeight: '200px',
        scrollable: true,
        closeOnSelect : true
    };

    $scope.subjectmodel = [];
    $scope.subjectdata = [
        {id: 1, label: "Math"},
        {id: 2, label: "Science"},
        {id: 3, label: "English"}
    ];

    $scope.subjectsettings = {
        scrollableHeight: '150px',
        scrollable: true
    };
    
    $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

//  $scope.toggleMin = function() {
//    $scope.minDate = $scope.minDate ? null : new Date();
//  };
//  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
  $scope.initDate = new Date(Date.now());
  $scope.formats = ['dd.MM.yyyy'];
  $scope.format = $scope.formats[0];
    
    $scope.getSessionCount  = getSessionCount;
    function getSessionCount() {
        
        var startdate   = $scope.startdate;
        var enddate     = $scope.enddate;

        if(enddate <= startdate ) {
            toastr.error('Invalid Date', 'Unable to find session count');
            return;
        }
        
        var data = {
            "startdate" : startdate,
            "enddate"   : enddate
        };
        
        var classes = [];
        for(var index = 0 ; index < $scope.classesmodel.length ; index++) {
            if($scope.classesmodel[index].id === 1) {
                classes.push("c6");
            }
            if($scope.classesmodel[index].id === 2) {
                classes.push("c7");
            }
            if($scope.classesmodel[index].id === 3) {
                classes.push("c8");
            }
            if($scope.classesmodel[index].id === 4) {
                classes.push("c9");
            }
            if($scope.classesmodel[index].id === 5) {
                classes.push("c10");
            }
            if($scope.classesmodel[index].id === 6) {
                classes.push("c11");
            }
            if($scope.classesmodel[index].id === 7) {
                classes.push("c12");
            }
        }

//        var subjects = [];
        for(var index = 0 ; index < $scope.subjectmodel.length ; index++) {
            if($scope.subjectmodel[index].id === 1) {
                classes.push("maths");
            } 
            if($scope.subjectmodel[index].id === 2) {
                classes.push("science");
            } 
            if($scope.subjectmodel[index].id === 3) {
                classes.push("english");
            } 
        }
        
        data.topics = classes;
      
        questionFactory.getAllSession(data, function(err, res) {
            console.log(res);
            console.log(err);
            if(res) {
                if(res.status.code === 303000) {
                    $scope.hideMessage = true;
                    $scope.totalQuestion = res.count;
                } else {
                    toastr.error('Invalid Credentials', 'Unable to find question count');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
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
            if(res && res.status) {
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