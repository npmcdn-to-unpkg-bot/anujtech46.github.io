angular.module('channelpartner')
        .controller('RegisterCPCtrl', RegisterCPCtrl)
        .controller('ShowAllCPCtrl', ShowAllCPCtrl);

RegisterCPCtrl.$inject = ['$scope', 'cpFactory', 'toastr', '$location'];
function RegisterCPCtrl($scope, cpFactory, toastr, $location) {
    
    $scope.registerCP =  function() {
        var data = {
            email : $scope.cp.email,
            fullname : $scope.cp.fullname,
            appid : $scope.cp.appid,
            password : $scope.cp.password,
            onboard : "CUSTOM",
            institute : $scope.cp.institute
        };
        
        cpFactory.doRegister(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.cp = '';
                    $scope.register.$setPristine();
                    $location.path('/showCP');
                } else {
                    toastr.error('Invalid Credentials', 'Unable to register');
                }
            } else {
                toastr.error('Server not working');
            }
        });
    };
};

ShowAllCPCtrl.$inject = ['$scope', 'toastr', 'cpFactory', '$location'];
function ShowAllCPCtrl($scope, toastr, cpFactory, $location) {
    
    $scope.getProfiles = getProfiles;
  
    cpFactory.getAllCP(function(err, res) {
        if(res) {
            if(res.status.code === 303000) {
                if(res.profiles.count === 0) {
                    $scope.count = res.profiles.count;
                } else {
                    $scope.count = res.profiles[0].count;
                    $scope.users = res.profiles;
                }
            } else {
                toastr.error('Invalid Credentials', 'Unable to find');
            }
        } else {
            toastr.error('Server not working');
        }
    });
    
    function getProfiles(userid, roles) {
        if(roles[0] === 'channelpartner') {
            $location.path('/profile/channelpartner/'+userid);
        } else {
            toastr.error('Invalid request');
        }
    }
};