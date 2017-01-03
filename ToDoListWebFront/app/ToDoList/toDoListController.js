(function () {
    "use strict";
    angular
          .module("toDoList")
          .controller("toDoListController", ["$scope",
              
              "toDoListFactory",
              "$uibModal",
              toDoListController]);

    function toDoListController($scope,toDolistFacotry,$uibModal) {
        $scope.isAdd = false;
        $scope.selected = {};
        toDolistFacotry.query({search:$scope.searchCri},function (data) {
                $scope.tasks = data;
            });
                 
        $scope.getTemplate = function (task) {
            if (task.id == $scope.selected.id)
                return "edit";
            else
                return "display";
        };

        $scope.editTask = function (task) {
            $scope.selected = angular.copy(task);
        } 

        $scope.saveEditTask = function (index,task) {

              toDolistFacotry.update(task);
              $scope.reset();
        }

        $scope.saveAddTask = function (task) {
            task.categoryid = 1;
            toDolistFacotry.save(task,function(data) {
                $scope.tasks.push(data);
            });
            $scope.isAdd = !$scope.isAdd;
        }

        $scope.deleteTask = function (task) {
            toDolistFacotry.delete(task, function (data) {
                $scope.tasks.splice(tasks.indexOf(task), 1);
            })
        }

        $scope.reset = function () {
            $scope.selected = {};
        }


        $scope.openDeleteModal = function (task) {
            var uibModalInstance = $uibModal.open({
                templateUrl: 'modal.html',
                controller: 'uibModalInstanceController',
                resolve: {
                    task:task
                }
            });

            uibModalInstance.result.then(function (task) {
                $scope.deleteTask(task);
            })
        }
    };
 }());