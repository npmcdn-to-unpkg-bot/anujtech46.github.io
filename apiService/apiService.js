//var apiService = angular.module('apiService');
//
//apiService.factory('apiFactory', function($log, user, $http, $location) {
//    
//    var factory = {};
//    
//    factory.doPost = function(url, data, config, callback) {
//        
//        $log.log("calling api [%s]"+ url);
//        
//        $http.post(url, data, config).
//            success(function(data, status, headers, config) {
//            // 400/500 errors show up here
//            return callback(null, data);
//        }).
//        error(function(data, status, headers, config) {
//            // never reached even for 400/500 status codes
//            $log.error("data", data);
//            return callback(true, null);
//        });
//    };
//    return factory ;
//});