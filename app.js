var app = angular.module('TUTRAPP', ['ngRoute','ngMessages','ngFileUpload',
                    'angularjs-datetime-picker','login','profile','question','registration','image','products',
                    'educator','student','channelpartner']);
 
app.value('user', {
    token:'',
    username:'',
//    apiEndPoint : "https://trringconnect.com:4000/api/admin/v1/"
    apiEndPoint : 'https://localhost:4000/api/admin/v1/'

});

