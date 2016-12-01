(function () {
    "use strict";
    angular
          .module("toDoList")
          .controller("toDoListController", ["$scope","toDoListFactory", toDoListController]);

    function toDoListController($scope, toDolistFacotry) {
     
            toDolistFacotry.query(function (data) {
                $scope.tasks = data;
            });
                 

    };
 }());