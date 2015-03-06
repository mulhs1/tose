
    /* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.pizza.designer')
        .controller('DesignerModalCtrl', DesignerModalCtrl);

    // @ngInject
    function DesignerModalCtrl(
        $log,
        $modalInstance,
        Pizza) {

        var LOG = $log.get('DesignerModalCtrl'),
            ctrl = this;

        LOG.debug('Entered');

        ctrl.pizza = Pizza.item || {};
        ctrl.modalClose = modalClose;

        function modalClose() {
            $modalInstance.close();
        }

    }

}());