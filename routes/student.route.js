//student.route.js
angular.module('student')
    .config(config);

function config($routeProvider) {
    $routeProvider.
            
            when('/addCreditStudent', {
                templateUrl :'views/student/student.update.view.html',
                controller :'UpdateStudentCtrl'
            }).
            when('/deleteStudent', {
                templateUrl :'views/student/student.delete.view.html',
                controller :'DeleteStudentCtrl'
        });
};