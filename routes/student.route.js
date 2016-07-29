//student.route.js
angular.module('student')
    .config(config);

function config($routeProvider) {
    $routeProvider.
            
            when('/addCreditStudent', {
                templateUrl :'views/student/student.update.view.html',
                controller :'UpdateStudentCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/deleteStudent', {
                templateUrl :'views/student/student.delete.view.html',
                controller :'DeleteStudentCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/referralUser', {
                templateUrl :'views/student/student.referred.view.html',
                controller :'ReferralUserCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/upgradeUser', {
                templateUrl :'views/student/student.upgraded.view.html',
                controller :'UgradeUserCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/getRegisteredUser', {
                templateUrl :'views/student/student.registered.credits.view.html',
                controller :'GetUserWithCredits',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/getStudentProfile', {
                templateUrl :'views/student/student.find.email.fullname.view.html',
                controller :'GetStudentProfileCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/sendEmailToAdmin', {
                templateUrl :'views/student/student.registered.detail.to.admin.view.html',
                controller :'SendEmailToAdminCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
            }).
            when('/AddCredits', {
                templateUrl :'views/student/student.add.credits.view.html',
                controller :'AddCreditsCtrl',
                resolve : {
                    loggedin : function(apiService) {
                        return apiService.onlyLoggedIn();
                    }
                }
        });
};