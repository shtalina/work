(function (angular) {
    'use strict';
    // var rootSrv = "zzz/portfolio";

    var app = angular.module('demo', ['ngSanitize', 'ui.select'])


    app.controller('DemoCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.resultsHidden = false;
        $scope.who == '2';
        $scope.person = {};

        $scope.activeCustomer = 'active';
        $scope.getVal = function (active) {
            $scope.activeCustomer = active.currentTarget.value;
        }


        $http.get(':https://timetable.tspu.ru/grs.php')
            .success(function (response) {
                $scope.groups_google = response;
            });
        }]);
    $scope.view = function (id) {
            location.href = "?staff=" + id;

        }

        $scope.currentElement = 30;
        $scope.loadMore = function () {
            // console.log("loadMore");
            $scope.currentElement = $scope.currentElement + 10;
        }

        var myDiv = angular.element(document.querySelector('#myDiv'));
        myDiv.click(function () {
            // reset back to 20
            $scope.currentElement = 10;
        });


    })(window.angular);