(function (angular) {
    'use strict';
    var app = angular.module('demo', [])


    app.controller('faculty', ['$scope', '$http', function ($scope, $http) {

        $http.get('https://timetable.tspu.ru/grs.php')
            .success(function (response) {
                $scope.groups_google = response;
            });
        }]);
        
})
(window.angular);