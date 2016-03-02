/**
 * Created by mykev on 3/1/2016.
 */
// TODO create angular controller using this file. Create factory to generate Project data

var app = angular.module('personalApp', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider

        //load home page
        .when('/', {
            templateUrl: 'main.ejs',
            controller: 'mainController'
        })

        //load projectList page
        .when('/projectList', {
            templateUrl: 'projectList.ejs',
            controller: 'projectListController'
        })

        //load project page
        .when('/project', {
            templateUrl: 'project.ejs',
            controller: 'projectController'
        });
});