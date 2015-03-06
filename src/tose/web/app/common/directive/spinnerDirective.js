
/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.common')
        .directive('spinner', spinner);

    // @ngInject
    function spinner(LoadingService, $log) {
        return {
            restrict: 'A',
            scope: {},
            link: link,
            controller: SpinnerController,
            controllerAs: 'ctrl',
            bindToController: true,
            template:
                '<div class="spinner" ng-if="ctrl.loading.active">' +
                    '<i class="fa fa-spinner fa-4x fa-spin"></i>' +
                '</div>'
        };

        function link(scope, element, attrs) {
        }


        function SpinnerController() {
            var LOG = $log.get('SpinnerDirective'),
                ctrl = this;

            ctrl.loading = LoadingService.loading;
        }

    }

}());
