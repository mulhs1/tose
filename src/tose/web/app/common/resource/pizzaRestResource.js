/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.pizza.offer')
        .factory('PizzaRestResource', PizzaRestResource);

    // @ngInject
    function PizzaRestResource(
        _,
        $http, $log,
        PromiseService) {

        var LOG = $log.get('PizzaRestResource'),
            mock = [
                { id: 1, name: 'Salami',    weight: 350, price: 15,    toppings: ['TOPPING_SALAMI', 'TOPPING_CHEESE']},
                { id: 2, name: 'Proschuto', weight: 370, price: 16,    toppings: ['TOPPING_HAM', 'TOPPING_CHEESE', 'TOPPING_OREGANO']},
                { id: 3, name: 'Tunani',    weight: 320, price: 17.50, toppings: ['TOPPING_TUNA', 'TOPPING_CHEESE', 'TOPPING_OLIVES']},
                { id: 4, name: 'Diabloni',  weight: 450, price: 18.50, toppings: ['TOPPING_SALAMI', 'TOPPING_CHILLY', 'TOPPING_CHEESE']},
                { id: 5, name: 'Sedlackis', weight: 1500, price: 35.20,toppings: ['TOPPING_SALAMI', 'TOPPING_BACON', 'TOPPING_CHEESE', 'TOPPING_EGGS']}
            ];

        return {
            findAll: findAll,
            findById: findById,
            create: create,
            update: update,
            remove: remove
        };

        function findAll() {
            // rest
            return PromiseService.createAndResolve(mock, 150);
        }

        function findById(id) {
            // rest
            var result = _.find(mock, function(pizza) {
                return pizza.id == id;
            });
            return PromiseService.createAndResolve(result, 150);
        }

        function create(pizza) {
            var lastId = _.reduce(mock, function(result, pizza) {
                result = result < pizza.id ? pizza.id : result;
                return result;
            }, 0);

            mock.push({ id: ++lastId, name: pizza.name, weight: pizza.weight, price: pizza.price, toppings: pizza.toppings});
            LOG.debug('Pizza with id: ' + lastId + ' created');
            return PromiseService.createAndResolve(undefined, 150);
        }

        function update(pizza) {
            var pizzaToUpdate = _.filter(mock, function(p) {
                return p.id === pizza.id;
            });
            angular.copy(pizza, pizzaToUpdate);
            LOG.debug('Pizza with id: ' + pizzaToUpdate.id + ' updated');
            return PromiseService.createAndResolve(undefined, 150);
        }

        function remove(id) {
            _.remove(mock, function(p) {
                return p.id === id;
            });
            LOG.debug('Pizza with id: ' + id + ' deleted');
            return PromiseService.createAndResolve(undefined, 150);
        }

    }

}());