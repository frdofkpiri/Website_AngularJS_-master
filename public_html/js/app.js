'use strict';

/* App Module */

var leGroupageApp = angular.module('helloWorldApp', [
    'ngRoute',     
    'siteControllers'
    
]);

leGroupageApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'SiteCtrl'
                })

            .when('/', {
                templateUrl: 'partials/portfolio.html',
                controller: 'PortfolioViewCtrl'
            }).when('/principles/:id', {
            templateUrl: 'partials/notrePrinciple.html',
            controller: 'SiteViewCtrl'
        });

        $locationProvider.html5Mode(false).hashPrefix('!');


    }]);



