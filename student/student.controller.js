var studentCtrl = angular.module('student');

studentCtrl.controller('updateStudentCtrl', function($scope, $http, user, $log) {

    $scope.ctrl = 'updateStudentCtrl';
    
    $scope.addCredits = function() {
    
        var url = user.apiEndPoint + "add/credits";
        var data = {
            'email': $scope.email
        };

        var config = {
            headers : {
                token : user.token,
                appid : $scope.appid
            }
        };
        $http.put(url, data, config).then(function(res, err) {
            if(res.data.code === 303000) {
                $log.info("Update student credits");
                $scope.message = "Add credits successfully";
                $scope.hideform = true;
            } else {
                $log.error("unable to update credits");
                $scope.message = "Unable to update credits";
            }
        });
    };
});

studentCtrl.controller('deleteStudentCtrl', function($scope, $http, user, $log) {

    $scope.ctrl = 'deleteStudentCtrl';
    
    $scope.deleteStudent = function() {
        
        var url = user.apiEndPoint + "delete/student/" + $scope.email ;

        var config = {
            headers : {
                token : user.token,
                appid : $scope.appid
            }
        };
        
        $http.delete(url, config).then(function(res, err) {
            if(res.data.code === 303000) {
                $log.info("delete student successfully");
                $scope.message = "delete student successfully";
                $scope.hideform = true;
            } else {
                $log.error("unable to delete student successfully");
                $scope.message = "Unable to delete student";
            }
        });
    };
});