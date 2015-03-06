/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.common')
        .factory('FormService', FormService);

    // @ngInject
    function FormService() {

        return {
            isSubmitable: isSubmitable,
            resetValidation: resetValidation
        };

        function isSubmitable(form, ignoredValidators) {

            if (form.$valid) {
                form.triggerResetValidation = !form.triggerResetValidation;
                return true;
            }

            if (form.$invalid) {

                form.ignoredValidators = ignoredValidators;

                if (ignoredValidators && isIgnoredValidatorsOnly(ignoredValidators, form.$error)) {
                    return true;
                }

                // Is submitable when contains warnings only
                if (isWarningsOnly(form.$error)) {
                    return true;
                }

//                    NotificationService.addWarning('notification.common.form.invalid');
                form.triggerShowValidation = !form.triggerShowValidation;
                return false;
            }
        }

        function isIgnoredValidatorsOnly(ignoredValidators, errors) {
            var isIgnoredOnly = true;
            for (var error in errors) {
                if (errors.hasOwnProperty(error)) {
                    if (error && errors[error] && ignoredValidators.indexOf(error) === - 1 && error.indexOf('warning') === -1) {
                        isIgnoredOnly = false;
                    }
                }
            }
            return isIgnoredOnly;
        }

        function isWarningsOnly(errors) {
            var isError = false;
            for (var error in errors) {
                if (errors.hasOwnProperty(error)) {
                    if (error && errors[error] && error.indexOf('warning') === -1) {
                        isError = true;
                    }
                }
            }
            return !isError;
        }

        function resetValidation(form) {
            form.triggerResetValidation = !form.triggerResetValidation;
        }

    }

}());