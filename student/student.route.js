angular.module('student').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
            
            when('/addCreditStudent', {
                templateUrl :'student/student.update.view.html',
                controller :'updateStudentCtrl'
            }).
            when('/deleteStudent', {
                templateUrl :'student/student.delete.view.html',
                controller :'deleteStudentCtrl'
        });
}]);