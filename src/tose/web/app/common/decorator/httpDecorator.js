/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.common')
        .config(httpDecorator);

    // @ngInject
    function httpDecorator(
        CONFIG,
        $provide) {

        $provide.decorator("$http", function ($delegate, $injector) {

            $delegate.apiHead = useApiUrl($delegate.head);
            $delegate.apiGet = useApiUrl($delegate.get);
            $delegate.apiPost = useApiUrl($delegate.post);
            $delegate.apiPut = useApiUrl($delegate.put);
            $delegate.apiDelete = useApiUrl($delegate['delete']);
            $delegate.apiPatch = useApiUrl($delegate.patch);
            $delegate.apiUpload = createApiUpload();

            return $delegate;

            function useApiUrl(httpFunction) {
                return function () {
                    var args = [].slice.call(arguments);
                    args[0] = CONFIG.APP_URL_API + args[0];
                    return httpFunction.apply(null, args);
                };
            }

            function createApiUpload() {
                return function (url, file) {

                    var $q = $injector.get('$q'),
                        upload = $injector.get('upload'),
                        options = {
                            url: CONFIG.APP_URL_API + url,
                            method: 'POST',
                            forceIFrameUpload: false,
                            data: {
                                file: file
                            }
                        };
                    return upload(options).then(success, error);

                    function success(response) { return response; }

                    function error(rejection) {
                        // TODO handle upload error
                        return $q.reject(rejection);
                    }
                };
            }

        });

    }

})();