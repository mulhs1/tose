/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.common')
        .factory('LoadingService', LoadingService);

    // @ngInject
    function LoadingService(
        _,
        CONFIG,
        $log, $timeout, $translate,
        growl) {

        var LOG = $log.get('LoadingService'),
            timeoutValue = CONFIG.APP_TIMEOUT_REQUEST || 10000,
            loadings = [],
            loadingId = 0,
            loading = {
                active : false
            };

        return {
            loading: loading,
            start: start,
            stop: stop
        };

        function start(info) {
            // store id in start()'s closure
            var id = loadingId,

                // create timeout and fail in case request takes too long to execute
                timeout = $timeout(function() {

                    // when timeout, search if timeout is still active, when yes show error
                    var loading = _.filter(loadings, function(loading) {
                        return loading.id === id;
                    });
                    if (typeof loading !== 'undefined') {
                        stop();
                        LOG.warn('Request timeout', info ? ': ' + info : '');
                        growl.error($translate.instant('ERROR_TIMEOUT'));
                    }

                }, timeoutValue);

            loadings.push({id: loadingId, timeout: timeout, info: info});
            loadingId++;
            loading.active = loadings.length > 0;
        }

        function stop() {
            // do nothing when no loadings are active
            if (loadings.length <= 0) {
                return;
            }

            // remove oldest timeout
            $timeout.cancel(loadings.shift().timeout);
            loading.active = loadings.length > 0;
        }
    }

}());