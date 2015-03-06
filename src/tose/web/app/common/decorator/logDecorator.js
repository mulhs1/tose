/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.common')
        .config(logDecorator);

    // @ngInject
    function logDecorator(
        CONFIG,
        $provide) {

        var LOG_LEVEL_PRIORITY = {
            error: 4,
            warn:  3,
            info:  2,
            log:   1,
            debug: 0
        };

        $provide.decorator("$log", function($delegate, $injector) {

            $delegate.get = function(context) {
                return {
                    error:  enhanceLogging('error', context),
                    warn:   enhanceLogging('warn',  context),
                    info:   enhanceLogging('info',  context),
                    log:    enhanceLogging('log',   context),
                    debug:  enhanceLogging('debug', context)
                };
            };

            return $delegate;

            function enhanceLogging(level, context) {
                if (LOG_LEVEL_PRIORITY[level] >= LOG_LEVEL_PRIORITY[CONFIG.APP_LOG_LEVEL]) {
                    return function() {
                        var args = [].slice.call(arguments),
                            header = $injector.get('moment')().format('YYYY-MM-DD HH:mm:ss:SSS') + ' ' + level.toUpperCase() + '\t[ ' + context + ' ]';

                        args.unshift(header);
                        $delegate[level].apply(this, args);

                        if (LOG_LEVEL_PRIORITY[level] >= LOG_LEVEL_PRIORITY[CONFIG.APP_LOG_LEVEL_BACKEND]) {
                            logToBackend.apply(this, [].slice.call(arguments));
                        }
                    };
                } else {
                    return function() {}; // Do nothing
                }
            }

            function logToBackend() {
                // TODO rest
            }
        });

    }

}());

