'use strict';

var app = angular.module('angularApp', ['ngRoute']);

var url = 'http://kevin-hwang-website.herokuapp.com';
var port = 3000;

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


app.controller('mainController', ['$scope', '$window', '$http', function ($scope, $window, $http) {

    $scope.resume = function () {
        $window.location.href = '/src/Resume.pdf';
    };

    $http.get(url + '/api')
        .success(function(data) {
            $scope.items = data;
            console.log($scope.items);
        });
}]);

app.controller('projectListController', function ($scope) {

});

app.controller('projectController', function ($scope) {

});

