angular.module('question')
    .controller('AQCtrl', AQCtrl)
    .controller('MQCtrl', MQCtrl)
    .controller('SQCtrl', SQCtrl)
    .controller('EQCtrl', EQCtrl)
    .controller('RepeatUserSessionCtrl', RepeatUserSessionCtrl);
    
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