(function () {
   "use strict";

   angular
    .module("common.services")
    .factory("toDoListFactory",
            ["$resource",
             "appSettings",
             toDoListFactory])

   function toDoListFactory($resouce, appSettings) {
       return $resouce(appSettings.serverPath + "/api/toDoItems/:id");
   }
}());