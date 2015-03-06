/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.common')
        .directive('confirmAction', confirmAction);

    // @ngInject
    function confirmAction($translate, dialogs) {
        return {
            restrict: 'A',
            scope: {
                confirmAction: '&',
                confirmCancel: '&'
            },
            controller: ConfirmActionCtrl,
            controllerAs: 'ctrl',
            bindToController: true
        };

        function ConfirmActionCtrl($element, $attrs) {
            var ctrl = this;

            var header = $translate.instant($attrs.confirmHeader ? $attrs.confirmHeader : 'DIALOGS_HEADER'),
                message = $translate.instant($attrs.confirmMessage ? $attrs.confirmMessage : 'DIALOGS_MESSAGE');

            $element.bind('click', function(event) {
                dialogs.confirm(header, message,{ size:'sm', backdrop: 'static' }
                ).result.then(function(){
                        if (ctrl.confirmAction && angular.isFunction(ctrl.confirmAction)) {
                            ctrl.confirmAction();
                        }
                    }, function(){
                        if (ctrl.confirmCancel && angular.isFunction(ctrl.confirmCancel)) {
                            ctrl.confirmCancel();
                        }
                    });
            });
        }

    }

}());
