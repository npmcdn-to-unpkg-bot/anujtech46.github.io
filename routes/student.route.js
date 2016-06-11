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
            }).
            when('/referralUser', {
                templateUrl :'views/student/student.referred.view.html',
                controller :'ReferralUserCtrl'
            }).
            when('/upgradeUser', {
                templateUrl :'views/student/student.upgraded.view.html',
                controller :'UgradeUserCtrl'
            }).
            when('/getRegisteredUser', {
                templateUrl :'views/student/student.registered.credits.view.html',
                controller :'GetUserWithCredits'
            }).
            when('/getStudentProfile', {
                templateUrl :'views/student/student.find.email.fullname.view.html',
                controller :'GetStudentProfileCtrl'
        });
};