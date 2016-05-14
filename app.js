var app = angular.module('TUTRAPP', ['ngRoute','ngMessages','ngFileUpload', 'toastr',
                    'angularjs-datetime-picker','login','profile','question','registration','image','products',
                    'educator','student','channelpartner']);
                

app.service('apiService', apiService);

app.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    autoDismiss: false,
    containerId: 'toast-container',
    maxOpened: 0,    
    newestOnTop: true,
    positionClass: 'toast-top-center',
    timeOut: 5000,
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: 'body'
  });
});
 
app.value('user', {
    token:'',
    username:'',
    apiEndPoint : "https://trringconnect.com:14000/api/admin/v1/"
//    apiEndPoint : "https://trringconnect.com:4000/api/admin/v1/"
//    apiEndPoint : 'https://localhost:4000/api/admin/v1/'

});

function apiService($log, $http) {
    
    this.doPost = function(url, data, config, callback) {
        
        $log.info("calling api [%s]"+ url);
        
        $http.post(url, data, config).
        success(function(data, status, headers, config) {
            $log.info("data", data);
            return callback(null, data);
        }).
        error(function(data, status, headers, config) {
            // never reached even for 400/500 status codes
            $log.error("error", data);
            return callback(true, null);
        });
    };
    
    this.doGet = function(url, config) {
        $log.info("calling api [%s]"+ url);
        
        $http.get(url, config).
        success(function(data, status, headers, config) {
            $log.info("res", data);
            return data;
        }).
        error(function(data, status, headers, config) {
            // never reached even for 400/500 status codes
            $log.error("error", data);
            return data;
        });
    };
};

