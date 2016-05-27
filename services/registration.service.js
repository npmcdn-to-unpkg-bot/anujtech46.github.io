// registration.service.js
angular
    .module('registration')
    .factory('registrationFactory', registrationFactory)
    .factory('PagerService', PagerService);
    
registrationFactory.$inject = ['apiService', '$log'];

function registrationFactory(apiService, $log) {
    
    var factory = {
        getTodayRegister    : getTodayRegister,
        getTotalRegister    : getTotalRegister,
        getTempUserRegister : getTempUserRegister,
        getDevices          : getDevices,
        getLastActiveUser   : getLastActiveUser,
        getRepeatUser       : getRepeatUser
    };
    
    function getTodayRegister(page, callback) {
        
        var url = apiService.getApiEndPoint() + "registration/today/" + page;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getTotalRegister(page, callback) {
        
        var url = apiService.getApiEndPoint() + "registration/total/" + page;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getTempUserRegister(page, callback) {
        
        var url = apiService.getApiEndPoint() + "tempusers/" + page;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            $log.info("res", res);
            return callback(err, res);
        });
    };
    
    function getDevices(page, callback) {
        
        var url = apiService.getApiEndPoint() + "devices/" + page;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getLastActiveUser(page, callback) {
        
        var url = apiService.getApiEndPoint() + "lastactive/" + page;
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    
    function getRepeatUser(callback) {
        
        var url = apiService.getApiEndPoint() + "repeatUser";
        
        var config = {
            headers : {
                'token' : apiService.getToken()
            }
        };
        
        apiService.doGet(url, config, function(err, res) {
            return callback(err, res);
        });
    };
    return factory ;
};

PagerService.$inject = (['_']);

function PagerService(_) {
    // service definition
    var service = {};

    service.GetPager = GetPager;

    return service;

    // service implementation
    function GetPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = startIndex + pageSize;

        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
};
