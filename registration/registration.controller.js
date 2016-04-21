var registration = angular.module('registration');

registration.controller('todayRegistrationCtrl', function($scope, $http, user) {

    var pageIndex = 0;
    var url = user.apiEndPoint + "registration/today/" + pageIndex;
    var config = {
        headers : {
            'token' : user.token
        }
    };
    $http.get(url, config).then(function(res, err) {
        if(res.data.status) {
            $scope.users    = res.data.totalUser;
            $scope.count    = res.data.count;
            pageIndex       = res.data.pageIndex;   
        } if(err) {
            $scope.err = err;
        }
    }); 
});

registration.controller('totalRegistrationCtrl', function($scope, $http, user) {
var pageIndex = 0;
    var url = user.apiEndPoint + "registration/total/" + pageIndex;;
    var config = {
        headers : {
            'token' : user.token
        }
    };
    $http.get(url, config).then(function(res, err) {
        if(res.data.status) {
            $scope.count = res.data.count;
            $scope.users = res.data.totalUser;
            pageIndex       = res.data.pageIndex;  
        } if(err) {
            $scope.err = err;
        }
    });
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