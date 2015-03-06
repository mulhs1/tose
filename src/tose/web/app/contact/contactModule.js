/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.contact', [
            'ui.router'
        ])

        .config(config);

    // @ngInject
    function config($stateProvider) {
        $stateProvider.state('contact', {
            url: '/',
            templateUrl: 'contact/contact.tpl.html'
        });
    }

}());