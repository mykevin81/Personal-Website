/**
 * Created by mykev on 3/1/2016.
 */


'use strict';

var app = angular.module('angularApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider

        //load home page
            .when('/', {
                templateUrl: 'main',
                controller: 'mainController'
            })

            //load projectList page
            .when('/projectList', {
                templateUrl: 'projectList',
                controller: 'projectListController'
            })

            //load project page
            .when('/project:projectId', {
                templateUrl: 'project',
                controller: 'projectController'
            })

            .otherwise({
                redirectTo: '/'
            });
    }]);


app.controller('mainController', ['$scope', '$window', function ($scope, $window) {

    $scope.resume = function () {
        $window.location.href = '/src/Resume.pdf';
    }
}]);

app.controller('projectListController', function ($scope) {

});

app.controller('projectController', function ($scope) {

});

