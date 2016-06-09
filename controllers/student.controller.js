angular.module('student')
    .controller('UpdateStudentCtrl', UpdateStudentCtrl)
    .controller('DeleteStudentCtrl', DeleteStudentCtrl)
    .controller('ReferralUserCtrl', ReferralUserCtrl)
    .controller('UgradeUserCtrl', UgradeUserCtrl);
    
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