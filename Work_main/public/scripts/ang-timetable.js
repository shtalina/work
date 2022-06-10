(function (angular) {
    'use strict';
    // var rootSrv = "zzz/portfolio";

    var app = angular.module('demo', ['ngSanitize'])


    app.controller('DemoCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('http://timetable.local/group/getallgroups')
            .success(function (response) {
                $scope.groups_google = response;
            });


        $scope.currentElement = 30;
        $scope.loadMore = function () {
            // console.log("loadMore");
            $scope.currentElement = $scope.currentElement + 10;
        }

        var myDiv = angular.element(document.querySelector('#myDiv'));
        myDiv.click(function () {
            // reset back to 20
            $scope.currentElement = 10;
        })


    }]);
    app.controller('teacher', ['$scope', '$http', function ($scope, $http) {
        // var t =window.location.href;
        var s = window.location.search;
        var id = s.substr(s.indexOf('') + 1);
        console.log([s]);
        console.log([id]);
        // console.log([t]);


    }]);
    app.controller('edit', ['$scope', '$http', function ($scope, $http) {
        // var t =window.location.href;
        var s = window.location.search;
        var id = s.substr(s.indexOf('') + 1);
        console.log([s]);
        console.log([id]);
        // console.log([t]);


        $http.get("/rasp_teacher.php?id=" + id)
            .success(function (response) {
                // var timetable = response;
                $scope.timetable = response;

            });

    }]);


    app.controller('class', ['$scope', '$http', function ($scope, $http) {

        var s = window.location.search;
        var id = s.substr(s.indexOf("class") + 2);
        // var id = decodeURI(s1);
        console.log([id]);


        $http.get("/rasp_teacher.php?view=" + id)
            .success(function (response) {
                // var timetable = response;
                $scope.timetable = response;

            });

    }]);
    app.filter('propsFilter', function () {
        return function (items, props) {
            var out = [];

            if (angular.isArray(items)) {
                items.forEach(function (item) {
                    var itemMatches = false;

                    var keys = Object.keys(props);
                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        }
    });
    app.filter("unique", function () {
        // we will return a function which will take in a collection
        // and a keyname
        return function (collection, keyname) {
            // we define our output and keys array;
            var output = [],
                keys = [];

            // we utilize angular's foreach function
            // this takes in our original collection and an iterator function
            angular.forEach(collection, function (item) {
                // we check to see whether our object exists
                var key = item[keyname];
                // if it's not already part of our keys array
                if (keys.indexOf(key) === -1) {
                    // add it to our keys array
                    keys.push(key);
                    // push this item to our final output array
                    output.push(item);
                }
            });
            // return our array which should be devoid of
            // any duplicates
            return output;
        };
    });
    app.controller('ffks', ['$scope', '$http', function ($scope, $http, Excel) {

        var s = window.location.search;
        var id = s.substr(s.indexOf("class") + 2);
        // var id = decodeURI(s1);
        console.log([id]);


        $http.get("/rasp_teacher.php?course=" + id)
            .success(function (response) {
                // var timetable = response;
                $scope.timetable = response;

            });

        $http.get("/weeks.php")
            .success(function (response) {
                $scope.person = {};
                $scope.people = response;
                $scope.person.selected = {'type_week': '1'};

            });


        $http.get("/courses.php")
            .success(function (response) {

                $scope.courses = response;

            });


    }]);

    app.controller('group', ['$scope', '$http', function ($scope, $http) {

        $scope.exportToExcel = function (tableId) { // ex: '#my-table'
            $scope.exportHref = Excel.tableToExcel(tableId, 'sheet name');
            $timeout(function () {
                location.href = $scope.fileData.exportHref;
            }, 100); // trigger download
        }
        var s = window.location.search;
        var id = s.substr(s.indexOf("") + 2);

        console.log([s]);

        console.log(id)


        $http.get("/rasp_teacher.php?group=" + id)
            .success(function (response) {
                // var timetable = response;
                $scope.timetable = response;

            });
        $http.get("/weeks.php")
            .success(function (response) {
                // var timetable = response;
                return $scope.weeks = response;

            });

    }
    ])
    ;


    app.directive('myEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) { //ENTER key
                    scope.$apply(function () {
                        scope.$eval(attrs.myEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });


    app.directive('scrollDetector', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var raw = element [0];
                element.bind('scroll', function () {
                    if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                        // console.log ("конец списка");
                        scope.$apply(attrs.scrollDetector);
                    }
                });
            }
        };
    });
})
(window.angular);
