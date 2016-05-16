angular
    .module('registration')
    .controller('TodayRegistrationCtrl', TodayRegistrationCtrl)
    .controller('TotalRegistrationCtrl', TotalRegistrationCtrl)
    .controller('TempUserCtrl', TempUserCtrl)
    .controller('DeviceCtrl', DeviceCtrl);

TodayRegistrationCtrl.$inject = (['$scope','PagerService', 'registrationFactory', 'toastr', '$log']);

function TodayRegistrationCtrl($scope, PagerService, registrationFactory, toastr, $log) {
    
    $scope.pager = {};
    $scope.setPage = setPage;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        registrationFactory.getTodayRegister(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.user.user);
                    $scope.pager = PagerService.GetPager(res.user.count, page, res.user.pageSize);
                    $scope.users =  res.user.user;
                    $scope.count = res.user.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
}


TotalRegistrationCtrl.$inject = (['$scope','PagerService', 'registrationFactory', 'toastr', '$log']);

function TotalRegistrationCtrl($scope, PagerService, registrationFactory, toastr, $log) {
    
    $scope.pager = {};
    $scope.setPage = setPage;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        registrationFactory.getTotalRegister(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.user.user);
                    $scope.pager = PagerService.GetPager(res.user.count, page, res.user.pageSize);
                    $scope.users =  res.user.user;
                    $scope.count = res.user.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
}


TempUserCtrl.$inject = (['$scope','PagerService', 'registrationFactory', 'toastr', '$log']);

function TempUserCtrl($scope, PagerService, registrationFactory, toastr, $log) {
    
    $scope.pager = {};
    $scope.setPage = setPage;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        registrationFactory.getTempUserRegister(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.user.user);
                    $scope.pager = PagerService.GetPager(res.user.count, page, res.user.pageSize);
                    $scope.users =  res.user.user;
                    $scope.count = res.user.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
}

DeviceCtrl.$inject = (['$scope','PagerService', 'registrationFactory', 'toastr', '$log']);

function DeviceCtrl($scope, PagerService, registrationFactory, toastr, $log) {
    
    $scope.pager = {};
    $scope.setPage = setPage;

    initController();

    function initController() {
        // initialize to page 1
         $scope.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page >  $scope.pager.totalPages) {
            return;
        }
        
        registrationFactory.getDevices(page, function(err, res) {
            if(res) {
                if(res.status.code === 303000) {
                    $log.info("getting res", res.devices.device);
                    $scope.pager = PagerService.GetPager(res.devices.count, page, res.devices.pageSize);
                    $scope.devices =  res.devices.device;
                    $scope.count = res.devices.count;
                    return;
                } else {
                    toastr.error('Invalid request');
                }
            } else {
                toastr.error('Server not working');
            }
        }); 
    }
}


