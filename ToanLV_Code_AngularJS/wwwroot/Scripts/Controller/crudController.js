//// wwwroot/Scripts/Controllers/crudController.js
//app.controller('crudController', ['$scope', 'crudService', function ($scope, crudService) {
//    $scope.items = [];
//    $scope.currentItem = {};

//    $scope.loadData = function () {
//        crudService.getAll().then(function (response) {
//            $scope.items = response.data;
//        });
//    };

//    $scope.addItem = function () {
//        crudService.create($scope.currentItem).then(function (response) {
//            $scope.loadData();
//            $scope.currentItem = {};
//        });
//    };

//    $scope.editItem = function (id) {
//        crudService.getById(id).then(function (response) {
//            $scope.currentItem = response.data;
//        });
//    };

//    $scope.updateItem = function () {
//        crudService.update($scope.currentItem).then(function (response) {
//            $scope.loadData();
//            $scope.currentItem = {};
//        });
//    };

//    $scope.deleteItem = function (id) {
//        crudService.delete(id).then(function (response) {
//            $scope.loadData();
//        });
//    };

//    // Load data on page load
//    $scope.loadData();
//}]);

///
app.controller('YourEntityController', ['$scope', 'YourEntityService', function ($scope, YourEntityService) {

    $scope.entities = [];

    $scope.loadEntities = function () {
        YourEntityService.getAll().then(function (response) {
            $scope.entities = response.data;
        }, function (error) {
            console.error('Error fetching data', error);
        });
    };

    $scope.createEntity = function () {
        YourEntityService.create($scope.newEntity).then(function () {
            $scope.loadEntities();
            $scope.newEntity = {};
        }, function (error) {
            console.error('Error creating entity', error);
        });
    };

    $scope.updateEntity = function (entity) {
        YourEntityService.update(entity).then(function () {
            $scope.loadEntities();
        }, function (error) {
            console.error('Error updating entity', error);
        });
    };

    $scope.deleteEntity = function (id) {
        YourEntityService.delete(id).then(function () {
            $scope.loadEntities();
        }, function (error) {
            console.error('Error deleting entity', error);
        });
    };

    // Initialize the list of entities
    $scope.loadEntities();
}]);

