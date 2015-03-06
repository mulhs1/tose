/* global angular, CONFIG */
(function () {
    "use strict";

    angular.module('angular-seed', [

        'templates-app',

        'ngMessages',
        'ngCookies',
        'ngAnimate',

        'ui.router',
        'ui.bootstrap',
        'ui.utils',

        'pascalprecht.translate',
        'tmh.dynamicLocale',
        'angular-growl',
        'dialogs.main',
        'lr.upload',

        'angular-seed.common',
        'angular-seed.home',
        'angular-seed.contact',
        'angular-seed.pizza',
        'angular-seed.pizza.offer',
        'angular-seed.pizza.designer'

    ])

    .constant('CONFIG', CONFIG)

    .constant('EVENT', {
        // ui-router
        STATE_CHANGE_START: '$stateChangeStart',
        STATE_CHANGE_SUCCESS: '$stateChangeSuccess',
        STATE_CHANGE_ERROR: '$stateChangeError',
        VIEW_CONTENT_LOADED: '$viewContentLoaded',

        // angular-translate
        TRANSLATE_CHANGE_SUCCESS: '$translateChangeSuccess'
    })

    .config(uiRouterConfig)
    .config(logConfig)
    .config(httpProviderConfig)
    .config(angularTranslateConfig)
    .config(dynamicLocaleProviderConfig)
    .config(growlConfig)

    .run(init);

    function uiRouterConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }

    function logConfig($logProvider) {
        $logProvider.debugEnabled(true);
    }

    function httpProviderConfig($httpProvider, CONFIG) {
        if (CONFIG.DEV_SENDCREDENTIALS) {
            $httpProvider.defaults.withCredentials = CONFIG.DEV_SENDCREDENTIALS;
        }
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        $httpProvider.interceptors.push('HttpInterceptor');
    }

    function angularTranslateConfig($translateProvider) {
        $translateProvider
            .useStaticFilesLoader({
                prefix: 'i18n/locale_',
                suffix: '.json'
            })
            .registerAvailableLanguageKeys(['en-us', 'de-ch'], {
                'en_US': 'en-us',
                'en_UK': 'en-us',
                'de_DE': 'de-ch',
                'de_CH': 'de-ch'
            })
            .determinePreferredLanguage()
            .useCookieStorage();
    }

    function dynamicLocaleProviderConfig(tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('i18n/angular-locale_{{locale}}.js');
    }

    function growlConfig(growlProvider) {
        growlProvider.globalTimeToLive({
            info: CONFIG.APP_TIMEOUT_NOTIFICATION_INFO,
            success: CONFIG.APP_TIMEOUT_NOTIFICATION_SUCCESS,
            warning: CONFIG.APP_TIMEOUT_NOTIFICATION_WARNING,
            error: CONFIG.APP_TIMEOUT_NOTIFICATION_ERROR
        });
        growlProvider.globalPosition('top-center');
        growlProvider.onlyUniqueMessages(false);
        growlProvider.globalReversedOrder(true);
        growlProvider.globalDisableCountDown(true);
        growlProvider.globalDisableIcons(true);
    }

    function init(
        $rootScope, $log, $timeout,
        $state, $translate,
        tmhDynamicLocale,
        SecurityService, LoadingService,
        CONFIG, EVENT) {

        var LOG = $log.get('AppModule');

        $rootScope.$state = $state;
        $rootScope.config = CONFIG;
        $rootScope.language = {
            change: function () {
                $translate.use($rootScope.language.selected);
                tmhDynamicLocale.set($rootScope.language.selected);
            }
        };

        $rootScope.$on(EVENT.TRANSLATE_CHANGE_SUCCESS, function () {
            $rootScope.language.selected = $translate.use();
            tmhDynamicLocale.set($rootScope.language.selected);
        });

        $rootScope.$on(EVENT.STATE_CHANGE_START, function (event, toState, toParams, fromState, fromParams) {
            if (toState.resolve) {
                LoadingService.start(formatStateChange(fromState, toState));
            }
        });

        $rootScope.$on(EVENT.STATE_CHANGE_SUCCESS, function (event, toState, toParams, fromState, fromParams) {
            LoadingService.stop();
            // resolve page title
            SecurityService.authenticate(toState);
        });

        $rootScope.$on(EVENT.VIEW_CONTENT_LOADED, function (event) {
            // Init bootstrap-material-design effects
            $timeout(function() { $.material.init(); });
        });

        $rootScope.$on(EVENT.STATE_CHANGE_ERROR, function(event, toState, toParams, fromState, fromParams, error){
            LoadingService.stop();
            if (error && error.status === 401) {
                return;
            } else {
                LOG.error(formatStateChangeError(fromState, toState, error));
            }

        });

        function formatStateChange(fromState, toState) {
            return 'State change from "' + stateNameOrUndefined(fromState) + '" -> "' + stateNameOrUndefined(toState) + '"';
            function stateNameOrUndefined(state) {
                return state.name ? state.name : 'undefined';
            }
        }

        function formatStateChangeError(fromState, toState, error) {
            return formatStateChange(fromState, toState) + ' | error: ' + JSON.stringify(error);
        }

    }

}());

