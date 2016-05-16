angular.module('question')
    .controller('AQCtrl', AQCtrl)
    .controller('MQCtrl', MQCtrl)
    .controller('SQCtrl', SQCtrl)
    .controller('EQCtrl', EQCtrl);
    
AQCtrl.$inject = ['$scope', 'questionFactory', 'toastr'];

function AQCtrl($scope, questionFactory, toastr) {

    questionFactory.getAllQoestion(function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.totalQuestion = res.count;
                } else {
                    toastr.error('Invalid Credentials', 'Unable to find question count');
                }
            } else {
                toastr.error('Server not working');
            }
    });
};


MQCtrl.$inject = ['$scope', 'questionFactory', 'toastr'];

function MQCtrl($scope, questionFactory, toastr) {
    
    var data = {
        subject : "maths"
    };
    
    questionFactory.getSubjectQoestion(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.mathsQuestion = res.count;
                } else {
                    toastr.error('Invalid Credentials', 'Unable to find maths count');
                }
            } else {
                toastr.error('Server not working');
            }
    });
};

SQCtrl.$inject = ['$scope', 'questionFactory', 'toastr'];

function SQCtrl($scope, questionFactory, toastr) {
    
    var data = {
        subject : "science"
    };
    
    questionFactory.getSubjectQoestion(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.scienceQuestion = res.count;
                } else {
                    toastr.error('Invalid Credentials', 'Unable to find science count');
                }
            } else {
                toastr.error('Server not working');
            }
    });
};

EQCtrl.$inject = ['$scope', 'questionFactory', 'toastr'];

function EQCtrl($scope, questionFactory, toastr) {
    
    var data = {
        subject : "english"
    };
    
    questionFactory.getSubjectQoestion(data, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $scope.englishQuestion = res.count;
                } else {
                    toastr.error('Invalid Credentials', 'Unable to find english count');
                }
            } else {
                toastr.error('Server not working');
            }
    });
};