var app = angular.module('TUTRAPP', ['ngRoute','ngMessages','ngFileUpload', 'toastr',
                    'angularjs-datetime-picker','login','profile','question','registration','products',
                    'educator','student','channelpartner', 'angular-loading-bar', 'ngAnimate', 'ngCookies']);
                

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

app.constant('_',
    window._
);

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }]);