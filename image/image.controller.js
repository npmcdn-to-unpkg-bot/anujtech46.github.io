
var image = angular.module('image');

image.controller('ImageCtrl', function ($scope, $http, user) {
    
    $scope.controllername = "ImageController";
    var data = 'none';
//    var url = user.apiEndPoint + "upload/avatar";
    $scope.add = function(){
        var url = 'https://localhost:4000/api/tutr/v1/upload/avatar';
        var config = {
                headers : {
                    token             : user.token,
                    'Content-Type': undefined 
                },
                transformRequest: angular.identity
            };
        var f = document.getElementById('file').files[0];
        console.log(f);
        r = new FileReader();
        console.log();
        r.onloadend = function(e){
            data = e.target.result;
            //send you binary data via $http or $resource or do anything else with it
        };
        $http.post(url, data, config).then(function(res, err) {
                if(res.data.code === 303000) {
                    $scope.data = res;
                } if(err) {
                    $scope.err = err;
                }
            });
        console.log(r.readAsBinaryString(f));
    };
});