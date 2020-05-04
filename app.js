var Roganlist = angular.module('Roganlist', [
    'ngRoute'
]);
Roganlist.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/guests.html'
        }).
        otherwise({
            redirectTo: '/'
        })
});