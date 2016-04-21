var question = angular.module('question');

question.controller('AQCtrl', function($scope, $http, user) {

    var url = user.apiEndPoint + "question";
    var config = {
        headers : {
            token : user.token
        }
    };
    $http.get(url, config).then(function(res, err) {
        if(res) {
            $scope.totalQuestion = res.data.count;
        } if(err) {
            $scope.err = err;
        }
    });
});

question.controller('MQCtrl', function($scope, $http, user) {
    
    var url = user.apiEndPoint + "question";
    var config = {
        headers : {
            token : user.token
        }
    };
    
    var data = {
        subject : "maths"
    };
    
    $http.post(url, data, config).then(function(res, err) {
        if(res) {
            $scope.mathsQuestion = res.data.count;
        } if(err) {
            $scope.err = err;
        }
    });
});

question.controller('SQCtrl', function($scope, $http, user) {
    
    var url = user.apiEndPoint + "question";
    var config = {
        headers : {
            token : user.token
        }
    };
    
    var data = {
        subject : "science"
    };
    
    $http.post(url, data, config).then(function(res, err) {
        if(res) {
            $scope.scienceQuestion = res.data.count;
        } if(err) {
            $scope.err = err;
        }
    });
});

question.controller('EQCtrl', function($scope, $http, user) {
    
    var url = user.apiEndPoint + "question";
    var config = {
        headers : {
            token : user.token
        }
    };
    
    var data = {
        subject : "english"
    };
    
    $http.post(url, data, config).then(function(res, err) {
        if(res) {
            $scope.englishQuestion = res.data.count;
        } if(err) {
            $scope.err = err;
        }
    });
});