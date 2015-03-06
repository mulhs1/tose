/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.pizza.designer', [
            'ui.router'
        ])

        .config(config);

    // @ngInject
    function config($stateProvider) {
        $stateProvider
            .state('pizza.designer', {
                url: '/designer',
                controller: 'DesignerCtrl',
                controllerAs: 'ctrl',
                templateUrl: 'pizza/designer/designer.tpl.html',
                resolve: {
                    initPizzaCollection: function(Pizza) {
                        return Pizza.initCollection();
                    }
                }
            })

            .state('pizza.designer.add', createModalStateConfig('/add'))
            .state('pizza.designer.edit', createModalStateConfig('/:pizzaId/edit'));

        function createModalStateConfig(url) {
            return {
                url: url,
                onEnter: /* @ngInject */ function($stateParams, $state, $modal, $timeout, Pizza) {
                    var modalInstance = $modal.open({
                        backdrop: 'static',
                        size: 'lg',
                        controller: 'DesignerModalCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: 'pizza/designer/designer-modal.tpl.html',
                        resolve: {
                            initPizzaItem: function() {
                                return Pizza.initItem($stateParams.pizzaId);
                            }.bind($stateParams)
                        }
                    });

                    modalInstance.opened.then(function() {
                        $timeout(function() { $.material.init(); });
                    });

                    modalInstance.result.then(function() {
                        $state.go('pizza.designer');
                    });

                }
            };
        }

    }

}());