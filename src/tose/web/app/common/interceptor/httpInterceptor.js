/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.common')
        .factory('HttpInterceptor', HttpInterceptor);

    // @ngInject
    function HttpInterceptor(
        $q, $log, $injector,
        CONFIG) {

        var LOG = $log.get('HttpInterceptor');

        return {
            'request': handleRequest,
            'requestError': handleRequestError,
            'response': handleResponse,
            'responseError': handleResponseError
        };

        function handleRequest(config) {
            if (isApiCall(config.url)) {
            }
            return config;
        }

        function handleRequestError(rejection) {
            return $q.reject(rejection);
        }

        function handleResponse(response) {
            if (isApiCall(response.config.url)) {
            }
            // Unwrap api responses
            if (response.data && isApiCall(response.config.url)) {
                return response.data;
            } else {
                return response;
            }
        }

        function handleResponseError(rejection) {
            if (isApiCall(rejection.config.url)) {
            }

            if (isUnauthorized(rejection)) {
                return handleUnauthorized(rejection);
            }

            if (isRecognizedError(rejection)) {
                handleRecognizedErrors(rejection);
            } else {
                handleGenericErrors(rejection);
            }

            logError(rejection);

            return $q.reject(rejection);
        }

        function isRecognizedError(rejection) {
            return rejection && rejection.data && rejection.data.exceptionClass &&
                rejection.data.exceptionClass.indexOf('com.mimacom') > -1;
        }

        function handleRecognizedErrors(rejection) {
            var error = rejection.data;
//                NotificationService.addError(
//                    {
//                        key:        'error.specific.' + getSimpleExceptionClass(error.exceptionClass),
//                        params:     error.params,
//                        isArray:    true
//                    }
//                );
            handleOptimisticLockingException(error);
        }

        function handleGenericErrors(rejection) {
            if(!isLogCall(rejection.config.url)) {
//                    NotificationService.addError('error.generic');
            }
        }

        function getSimpleExceptionClass(exceptionClass) {
            var tokens = exceptionClass.split('.');
            return tokens[tokens.length - 1];
        }

        function logError(rejection) {
            if (rejection.status === 0) {
                return;
            }
            if (rejection.data) {
                LOG.debug(JSON.stringify(rejection.data));
            }
            var logMessage = rejection.status;
            logMessage += ' - ' + rejection.statusText;
            logMessage += rejection.data && rejection.data.message ? ' - ' + rejection.data.message : '';
            logMessage += rejection.config && rejection.config.url ? ' (' + rejection.config.url + ')' : '';
            LOG.error(logMessage);
        }

        function handleOptimisticLockingException(error) {
            if (error.messageKey === 'ObjectOptimisticLockingFailureException') {
                // injected here to prevent circular dependency during factory creation
                var $state = $injector.get('$state');

                // reload state
                $state.go($state.current.name, {}, { reload: true });
                return true;
            }
            return false;
        }

        function handleUnauthorized(rejection) {
            LOG.info("Session expired", null, false);
            var modalInstance = $injector.get('$modal').open({
                templateUrl: 'common/template/session-expired-modal.tpl.html'
            });
            modalInstance.result.then(function (selectedItem) {
                $injector.get('$window').location.reload();
            });
            return $q.reject(rejection);
        }

        function isUnauthorized(rejection) {
            return rejection && rejection.status === 401;
        }

        function isApiCall(url) {
            return url.indexOf(CONFIG.APP_URL_API) > -1;
        }

        function isLogCall(url) {
            return url.indexOf('log') > -1;
        }

    }

}());