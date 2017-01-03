(function () {
    angular
        .module('toDoList')
        .controller('uibModalInstanceController'
        , function ($scope
            ,$uibModalInstance,
            task) {
            $scope.ok = function () {
                $uibModalInstance.close(task);
            }

            $scope.cancel = function () {
                $uibModalInstance.dismiss();
            }
        })
}());