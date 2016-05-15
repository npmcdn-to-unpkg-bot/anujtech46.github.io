angular.module('student')
    .controller('UpdateStudentCtrl', UpdateStudentCtrl)
    .controller('DeleteStudentCtrl', DeleteStudentCtrl);
    
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