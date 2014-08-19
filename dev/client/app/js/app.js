'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap',
  'facebook'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signin', {templateUrl: 'partials/auth-signin.html', controller: 'SignInCtrl', authenticate: false});
  $routeProvider.when('/signup', {templateUrl: 'partials/auth-signup.html', controller: 'authenticateCtrl', authenticate: false});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'authenticateCtrl', authenticate: false});
  $routeProvider.when('/view1', {templateUrl: 'partials/add-bite.html', controller: 'MyCtrl1', authenticate: true});
  $routeProvider.when('/view2', {templateUrl: 'partials/list-bites.html', controller: 'MyCtrl2', authenticate: false});
  $routeProvider.when('/bite/:biteId', {templateUrl: 'partials/show-bite.html', controller: 'MyController', authenticate: false});
  $routeProvider.when('/main/', {templateUrl: 'partials/main.html', controller: 'MyCtrl2', authenticate: false});
  $routeProvider.otherwise({redirectTo: 'login'});
}]).
run(['$rootScope', '$location', 'API', function ($rootScope, $location, API) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {

            //console.log("change " + JSON.stringify(next) + " protected = " + next.authenticate)
            if((typeof(next.authenticate) === "undefined" || next.authenticate)
                && !API.isAuthenticated){
                console.log("you need to login!");
                $location.path( "/login" );
            } else {
                var loggedin = API.isAuthenticated
                console.log("something else = " + loggedin);
            }
        })
}]);