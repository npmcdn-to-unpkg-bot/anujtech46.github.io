
angular.module('TUTRAPP')
        .service('apiService', apiService);

apiService.$inject = ['$log', '$http'];

function apiService($log, $http) {
    
    var token = '';
    var username = '';
//    var apiEndPoint = 'https://localhost:4000/api/admin/v1/';
    var apiEndPoint = 'https://trringconnect.com:14000/api/admin/v1/';
//    var apiEndPoint = 'https://trringconnect.com:4000/api/admin/v1/';
    
    this.setToken = function(token) {
        this.token = token;
        return ;
    };
    
    this.getToken = function() {
        return this.token;
    };
    
    this.setUsername = function(username) {
        this.username = username;
        return ;
    };
    
    this.getUsername = function() {
        return this.username;
    };
    
    this.getApiEndPoint = function() {   
        return apiEndPoint;
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
};