
angular.module('TUTRAPP')
        .service('apiService', apiService);

apiService.$inject = ['$log', '$http', '$cookies', '$location', '$q', 'toastr'];

function apiService($log, $http, $cookies, $state, $q, toastr) {
    
//    var token = '';
//    var username = '';
//    var apiEndPoint = 'https://localhost:4000/api/admin/v1/';
    var apiEndPoint = 'https://trringconnect.com:14000/api/admin/v1/';
//    var apiEndPoint = 'https://trringconnect.com:4000/api/admin/v1/';
    
//    this.setToken = function(token) {
//        this.token = token;
//        return ;
//    };
    
    this.getToken = function() {
        return $cookies.get('loginToken');
    };
    
//    this.setUsername = function(username) {
//        this.username = username;
//        return ;
//    };
    
    this.getUsername = function() {
        var username = $cookies.get('username');
        return username;
    };
    
    this.getApiEndPoint = function() {   
        return apiEndPoint;
    };
    
    this.removeToken = function() {   
        $cookies.remove('loginToken');
        return ;
    };
    
    
    this.doPost = function(url, data, config, callback) {
        
        $log.info("calling api [%s]"+ url);
        
        $http.post(url, data, config).
        success(function(data, status, headers, config) {
            return callback(null, data);
        }).
        error(function(data, status, headers, config) {
            // never reached even for 400/500 status codes
            $log.error("error", data);
            return callback(true, null);
        });
    };
    
    this.doGet = function(url, config, callback) {
        $log.info("calling api [%s]"+ url);
        
        $http.get(url, config).
        success(function(data, status, headers, config) {
            $log.info("res", data);
            return callback(null, data);
        }).
        error(function(data, status, headers, config) {
            // never reached even for 400/500 status codes
            $log.error("error", data);
            return callback(true, null);
        });
    };
    
    this.doPut = function(url, data, config, callback) {
        
        $log.info("calling api [%s]"+ url);
        
        $http.put(url, data, config).success(function(data, status, headers, config) {
            $log.info("data", data);
            return callback(null, data);
        }).
        error(function(data, status, headers, config) {
            // never reached even for 400/500 status codes
            $log.error("error", data);
            return callback(true, null);
        });     
    };
    
    this.doDelete = function(url, config, callback) {
        
        $log.info("calling api [%s]"+ url);
        
        $http.delete(url, config).success(function(data, status, headers, config) {
            $log.info("data", data);
            return callback(null, data);
        }).
        error(function(data, status, headers, config) {
            // never reached even for 400/500 status codes
            $log.error("error", data);
            return callback(true, null);
        });     
    };
    
    this.isLoggedIn = function() {
        var token = $cookies.get('loginToken');
        if(token) {
            return true;
        }
        return false;
    };
    
    this.onlyLoggedIn = function() {
    
        var deferred = $q.defer();
        var token   = $cookies.get('loginToken');
        if (token) {
            deferred.resolve();
        } else {
            deferred.reject();
            toastr.error("You are not logged in, Please login");
            $state.go('/');
        }
        return deferred.promise;
    };
};