var profile = angular.module('profile');

profile.controller('profileCtrl', function($scope, user, $http) {
    
    $scope.username = user.username;
    
});
profile.controller('showProfileCtrl', function($scope, user, $http, $location, $routeParams) {
    
    $scope.ctrl = "showProfileCtrl";
    
    var userid = $routeParams.userid;
    var url = user.apiEndPoint + "get/profile/"+userid;
    console.log("url",url);
    var data = {
        userid: userid
    };
    console.log(data);
    
    var config = {
        params: data,
        headers : {
            'token' : user.token
        }
    };

    $http.get(url, config).then(function(res, err) {
        if(res) {
            console.log(res);
            if(res.data.role === "student") {
                $scope.profiles = res.data.profile;
                $location.path('/profile/student');
            } if(res.data.role === "educator"){
                $scope.profiles = res.data.profile;
                $location.path('/profile/educator');
            }
            
        } if(err) {
            $scope.err = err;
        }
    });
});