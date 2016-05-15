var app = angular.module('TUTRAPP', ['ngRoute','ngMessages','ngFileUpload', 'toastr',
                    'angularjs-datetime-picker','login','profile','question','registration','image','products',
                    'educator','student','channelpartner']);
                

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