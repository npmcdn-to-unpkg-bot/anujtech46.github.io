var registration = angular.module('registration');

registration.controller('todayRegistrationCtrl', function($scope, $http, user) {

        $scope.currentPage = 1;
        $scope.numPages = 5;
        $scope.pageSize = 5;
        $scope.pages = [];
    var url = user.apiEndPoint + "registration/today/" + 1;
    var config = {
        headers : {
            'token' : user.token
        }
    };
    $http.get(url, config).then(function(res, err) {
        if(res.data.status) {
            $scope.users    = res.data.totalUser;
            $scope.count    = res.data.count; 
        } if(err) {
            $scope.err = err;
        }
    }); 
    $scope.onSelectPage = function (pageIndex) {
        
        var url = user.apiEndPoint + "registration/today/" + pageIndex; 
        $http.get(url, config).then(function(res, err) {
            if(res.data.status) {
                $scope.users    = res.data.totalUser;
                $scope.count    = res.data.count; 
            } if(err) {
                $scope.err = err;
            }
        }); 
    };
});

registration.controller('totalRegistrationCtrl', function($scope, $http, user, $log) {
        $scope.currentPage = 1;
        $scope.numPages = 5;
        $scope.pageSize = 5;
        $scope.pages = [];
//    var url = user.apiEndPoint + "registration/total/" + 1;
    var config = {
        headers : {
            'token' : user.token
        }
    };
    $scope.onSelectPage = function (page) {
        
        $log.log(page);
        var pageIndex = page-1;
        var url = user.apiEndPoint + "registration/total/" + pageIndex; 
        $http.get(url, config).then(function(res, err) {
            if(res.data.status) {
                $scope.users    = res.data.totalUser;
                $scope.count    = res.data.count; 
            } if(err) {
                $scope.err = err;
            }
        }); 
    };
//    $http.get(url, config).then(function(res, err) {
//        if(res.data.status) {
//            $scope.count = res.data.count;
//            $scope.users = res.data.totalUser;
////            pageIndex       = res.data.pageIndex;  
//        } if(err) {
//            $scope.err = err;
//        }
//    });
});

registration.controller('tempUserCtrl', function($scope, $http, user, $log) {

    var url = user.apiEndPoint + "tempusers";
    var config = {
        headers : {
            'token' : user.token
        }
    };
    $log.info("call url"+ url);
    $http.get(url, config).then(function(res, err) {
        if(res.data.status.code === 303000) {
            $log.info("response :-"+ res.data.tempuser);
            $scope.users = res.data.tempuser; 
        } if(err) {
            $scope.err = err;
        }
    });
});
registration.directive('paging', function() {
        return {
            restrict: 'E',
            //scope: {
            //    numPages: '=',
            //    currentPage: '=',
            //    onSelectPage: '&'
            //},
            template: '',
            replace: true,
            link: function(scope, element, attrs) {
                scope.$watch('numPages', function(value) {
                    scope.pages = [];
                    for (var i = 1; i <= value; i++) {
                        scope.pages.push(i);
                    }
                    alert(scope.currentPage );
                    if (scope.currentPage > value) {
                        scope.selectPage(value);
                    }
                });
                scope.isActive = function(page) {
                    return scope.currentPage === page;
                };
                scope.selectPage = function(page) {
                    if (!scope.isActive(page)) {
                        scope.currentPage = page;
                        scope.onSelectPage(page);
                    }
                };
                scope.selectPrevious = function() {
                    if (!scope.noPrevious()) {
                        scope.selectPage(scope.currentPage - 1);
                    }
                };
                scope.selectNext = function() {
                    if (!scope.noNext()) {
                        scope.selectPage(scope.currentPage + 1);
                    }
                };
                scope.noPrevious = function() {
                    return scope.currentPage === 1;
                };
                scope.noNext = function() {
                    return scope.currentPage === scope.numPages;
                };

            }
        };
    });