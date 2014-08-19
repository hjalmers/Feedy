'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.factory('API', function ($rootScope, $http, $window, $cookies) {
        var authenticated = $cookies.user ? true : false;
        return {
            logout: function(form){
                //alert("hepp")
                authenticated = false;
                return $http.get('/logout');
            },
            login: function(form){
                //alert("hepp")
                authenticated = true;
                return $http.post('/login', form, {
                    method:'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });
            },
            signup: function(form){
                console.log(form);
                //alert("signup")
                return $http.post('/signup', form, {
                    method:'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    /*params:{
                        email:form.email,
                        password:form.password
                    }*/
                });
            },
            saveItem: function (form) {
                return $http.post('/api/v1/bite/data/item', form, {
                    method: 'POST'
                });
            },
            getBites: function (form, email) {
                return $http.get('/api/v1/bite/data/item/get', {
                    method: 'GET',
                    params: {
                        token: email
                    }
                });
            },
            isAuthenticated: authenticated

        }

});