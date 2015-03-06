/* global angular */
(function () {
    "use strict";

    /*

        This directive to be used together angular-upload library

        https://github.com/leon/angular-upload

        Original library contains uploadButton directive which is not customizable enough
        and fires upload event as soon as file is selected which is undesirable behaviour

     */

    angular.module('angular-seed.common').directive('upload', function($compile) {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                upload: '='
            },
            template:
                '<div>' +
                    '<label for="fileinput{{getRandomId()}}" type="button" class="btn btn-primary btn-block" ng-hide="ifFileSelected()">' +
                        '<i class="fa fa-upload"></i> ' +
                        ' <span ng-transclude></span>' +
                    '</label>' +
                    '<label ng-show="ifFileSelected()" class="upload-file">' +
                        ' <span><i class="fa fa-upload"></i> {{fileName}}</span>' +
                        ' <button type="button" class="btn btn-default" ng-click="reinitFileInput()">' +
                            '<i class="fa fa-times"></i> ' +
                        ' </button>' +
                    '</label>' +
                    '<input class="hidden" type="file"  id="fileinput{{getRandomId()}}" />' +
                '</div>',
            link: function(scope, element, attr) {

                var fileInput = angular.element(element[0].querySelector("input")),
                    randomId;

                fileInput.on('change', function() {
                    scope.$apply(function() {
                        scope.upload = fileInput;
                        scope.fileName = fileInput[0].value.split('/').pop().split('\\').pop();
                    });
                });

                scope.ifFileSelected = function() {
                    return scope.fileName;
                };

                scope.reinitFileInput = function() {
                    scope.fileName = '';
                };

                scope.getRandomId = function() {
                    if (!randomId) {
                        randomId = Math.random();
                    }
                    return randomId;
                };

            }
        };
    });



}());
