/**
 * Created by mykev on 3/1/2016.
 */
// TODO create angular controller using this file. Create factory to generate Project data

'use strict';

var app = angular.module('angularApp', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider){

        $routeProvider

            //load home page
            .when('/', {
                templateUrl: 'main.ejs',
                controller: 'mainController'
            })

            //load projectList page
            .when('/projectList', {
                templateUrl: 'projectList',
                controller: 'projectListController'
            })

            //load project page
            .when('/project:prjectId', {
                templateUrl: 'project',
                controller: 'projectController'
            })

            .otherwise({
                redirectTo: '/'
            });
}]);


app.controller('mainController', function($scope) {

});

/*app.controller('projectListController', function() {

});

app.controller('projectController', function() {

});*/

