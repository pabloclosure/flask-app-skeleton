var app = angular.module('APP_NAME', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'closureAngular',
]);



app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        });
});
