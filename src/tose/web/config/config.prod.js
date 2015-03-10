var CONFIG = {
    /**
     *
     * @preserve
     * Prod and dev properties (may have different value in prod)
     *
     * Numbers may be minified to format XeY, e.g. 2e3 = 2000, for changes in production use standard number format
     *
     */
    APP_NAME: 'angular-seed',

    APP_URL_API: 'http://localhost:8090/context/api',

    APP_LOG_LEVEL: 'warn',
    APP_LOG_LEVEL_BACKEND: 'error',

    APP_UI_PAGING_PAGESIZE: 10,
    APP_UI_TYPEAHEAD_LIMIT: 10,
    APP_UI_TYPEAHEAD_DELAY: 300,

    APP_TIMEOUT_NOTIFICATION_INFO: 5000,
    APP_TIMEOUT_NOTIFICATION_SUCCESS: 1500,
    APP_TIMEOUT_NOTIFICATION_WARNING: 6000,
    APP_TIMEOUT_NOTIFICATION_ERROR: -1,
    APP_TIMEOUT_REQUEST: 60000,

    /**
     *
     * @preserve
     * Business properties
     *
     */
    BUSINESS_TEST: 'test'

};