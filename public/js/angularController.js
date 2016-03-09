/**
 * Created by mykev on 3/1/2016.
 */
// TODO create angular controller using this file. Create factory to generate Project data

'use strict';

var app = angular.module('angularApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){

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


app.controller('mainController', function($scope) {
    $scope.hello = 'hello';
});

app.controller('projectListController', function($scope) {

});

app.controller('projectController', function($scope) {

});

