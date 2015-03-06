/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.pizza.offer')
        .controller('OfferCtrl', OfferCtrl);

    // @ngInject
    function OfferCtrl(
        $log,
        Pizza) {

        var LOG = $log.get('OfferCtrl'),
            ctrl = this;

        LOG.debug('Entered');

        ctrl.pizzas = Pizza.collection;

        ctrl.action = action;
        ctrl.cancel = cancel;

        function action() {
            LOG.info('action');
        }

        function cancel() {
            LOG.error('cancel');
        }
    }

}());