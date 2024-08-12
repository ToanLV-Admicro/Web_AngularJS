//// wwwroot/Scripts/Services/crudService.js
//app.service('crudService', ['$http', function ($http) {
//    this.getAll = function () {
//        return $http.get('/api/Items');
//    };

//    this.getById = function (id) {
//        return $http.get('/api/Items/' + id);
//    };

//    this.create = function (item) {
//        return $http.post('/api/Items', item);
//    };

//    this.update = function (item) {
//        return $http.put('/api/Items/' + item.id, item);
//    };

//    this.delete = function (id) {
//        return $http.delete('/api/Items/' + id);
//    };
//}]);

////
app.service('YourEntityService', ['$http', function ($http) {
    var apiUrl = '/api/YourEntity';

    this.getAll = function () {
        return $http.get(apiUrl);
    };

    this.getById = function (id) {
        return $http.get(apiUrl + '/' + id);
    };

    this.create = function (entity) {
        return $http.post(apiUrl, entity);
    };

    this.update = function (entity) {
        return $http.put(apiUrl + '/' + entity.id, entity);
    };

    this.delete = function (id) {
        return $http.delete(apiUrl + '/' + id);
    };
}]);

