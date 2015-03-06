/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.pizza.offer')
        .factory('Pizza', Pizza);

    // @ngInject
    function Pizza(
        _,
        $log,
        PizzaRestResource) {

        var LOG = $log.get('Pizza'),
            models = {
                main: {
                    collection: [],
                    item: {}
                }
            };

        return {
            collection: models.main.collection,
            item: models.main.item,
            models: models,

            initCollection: initCollection,
            initItem: initItem,
            create: create,
            update: update,
            remove: remove
        };

        function initCollection(modelId) {
            return PizzaRestResource.findAll().then(function (response) {
                angular.copy(response,  getModel(modelId).collection);
                LOG.debug('Collection "' + (modelId || 'main') + '" initialized', getModel(modelId).collection);
            });
        }

        function initItem(pizzaId, modelId) {
            return PizzaRestResource.findById(pizzaId).then(function (response) {
                angular.copy(response,  getModel(modelId).item);
                LOG.debug('Item "' + (modelId || 'main') + '" initialized', getModel(modelId).item);
            });
        }

        function create(pizza, modelId) {
            return PizzaRestResource.create(pizza);
        }

        function update(pizza, modelId) {
            return PizzaRestResource.update(pizza);
        }

        function remove(pizza, modelId) {
            return PizzaRestResource.remove(pizza.id);
        }

        function getModel(modelId) {
            modelId = modelId ? modelId : 'main';
            models[modelId] = models[modelId] ? models[modelId] : { collection: [], item: {}};
            return models[modelId];
        }

    }

}());