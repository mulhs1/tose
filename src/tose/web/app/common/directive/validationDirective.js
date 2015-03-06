

    /* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.common')
        .directive('validation', validation);

    // @ngInject
    function validation() {

        return {
            restrict: 'A',
            require: 'ngModel',
            transclude: true,
            replace: true,
            scope: {
                field: '=validation'
            },
            //link: link,
            controller: ValidationCtrl,
            controllerAs: 'ctrl',
            bindToController: true,
            template:
                '<div ng-class="{ \'has-success\': ctrl.hasSuccess(), \'has-error\': ctrl.hasError() }" ng-transclude>' +
                '</div>'
        };

        function ValidationCtrl() {

            var ctrl = this;

            ctrl.hasSuccess = hasSuccess;
            ctrl.hasError = hasError;

            function hasSuccess() {
                return ctrl.field && ctrl.field.$valid && ctrl.field.$touched;
            }

            function hasError() {
                return ctrl.field && !ctrl.field.$valid && ctrl.field.$touched;
            }

        }

    }

}());
