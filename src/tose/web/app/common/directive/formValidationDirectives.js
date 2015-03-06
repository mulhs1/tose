/* global angular */
(function () {
    "use strict";

    angular.module('angular-seed.common')

        .directive('validation1', function ($translate, $timeout) {
            return {
                restrict: 'A',
                require:  '^form',
                transclude: true,
                replace: true,
                scope: {

                },
                template:
                    '<div ng-class="{\'has-error\': showError(), \'has-warning\': showWarning(), \'has-success\': showSuccess(), \'feedback-select\': isSelect}">' +
                        '<div ng-class="{\'input-group\': isInputGroup}" ng-transclude></div>' +
                        '<span class="form-control-feedback" ng-if="showFeedback()">' +
                            '<span class="fa" ng-class="{\'fa-times\': showError(), \'fa-exclamation-triangle\': showWarning(), \'fa-check\': showSuccess()}"></span>' +
                        '</span>' +
                        '<span class="validation-messages help-block" ng-show="(showError() || showWarning()) && messagesCount > 0"></span>' +
                    '</div>',
                link: function (scope, element, attrs, formCtrl) {
                    var feedback = angular.element(element[0].querySelector("span[class='form-control-feedback'] span"));
                    var messages = angular.element(element[0].querySelector("span[class='validation-messages help-block']"));
                    var field = angular.element(element[0].querySelector("[name]"));
                    scope.field = formCtrl[field.attr('name')];
                    scope.isInputGroup = element.hasClass('input-group');
                    scope.isSelect = field.is('select');

                    scope.showFeedback = function() {
                        return scope.showError() || scope.showWarning() || scope.showSuccess();
                    };

                    scope.showError = function() {
                        return scope.field.$invalid && (scope.blur || scope.show) && !scope.showWarning();
                    };

                    scope.showWarning = function() {
                        var isError = false,
                            isWarning = false;
                        angular.forEach(scope.field.$error, function(value, key) {
                            if (value) {
                                if (key.indexOf('warning') > -1) {
                                    isWarning = true;
                                } else {
                                    isError = true;
                                }
                            }
                        });
                        return !isError && isWarning && (scope.blur || scope.show);
                    };

                    scope.showSuccess = function() {
                        return !scope.field.$invalid && (scope.blur || scope.show);
                    };

                    field.bind('blur', function() {
                        /*
                            Added timeout to prevent layout change because of the added error messages, which sometimes caused
                            inability to click button direcly from selected input field
                            ( blur was triggered, messages shown and button moved )
                        */
                        $timeout(function () {
                            scope.blur = true;
                            addErrors();
                        }, 150);
                    });

                    scope.$watch(function() {return formCtrl.triggerShowValidation;}, function() {
                        scope.show = true;
                    });

                    scope.$watch(function() {return formCtrl.triggerResetValidation;}, function() {
                        scope.show = false;
                        scope.blur = false;
                    });

                    scope.$watch(function() {return scope.field.$error;}, function() {
                        addErrors();
                    }, true);

                    scope.messagesCount = 0;
                    function addErrors() {
                        scope.messagesCount = 0;
                        messages.empty();

                        angular.forEach(scope.field.$error, function(value, key) {
                            if (value) {


                                scope.messagesCount++;
                                var params,
                                    messageKey;
                                switch(key) {
                                    case 'minlength': { params = { limit: field.attr('ng-minlength'), actual: field[0].value.length };  } break;
                                    case 'maxlength': { params = { limit: field.attr('ng-maxlength'), actual: field[0].value.length };  } break;
                                    case 'min':       { params = { limit: field.attr('min') };  } break;
                                    case 'max':       { params = { limit: field.attr('max') };  } break;
                                    case 'greater':   { params = { limit: field.attr('greater') }; } break;
                                    case 'less':      { params = { limit: field.attr('less') };  } break;
                                }
                                messageKey = field.attr(key + '-message') ? field.attr(key + '-message') : 'validation.basic.' + key;

                                $translate(messageKey, params).then(function (message) {
                                    messages.append('<div style="margin-bottom: 5px;">' + message + '</div>');
                                });
                            }
                        });
                    }

                }
            };
        })

        .directive('integer', function() {
            var INTEGER_REGEXP = /^\-?\d+$/;
            return {
                require: 'ngModel',
                link: function(scope, elm, attrs, ctrl) {
                    ctrl.$parsers.unshift(function(viewValue) {
                        if (INTEGER_REGEXP.test(viewValue)) {
                            ctrl.$setValidity('integer', true);
                            return viewValue;
                        } else {
                            ctrl.$setValidity('integer', false);
                            return undefined;
                        }
                    });
                }
            };
        })

        .directive('float', function() {
            var FLOAT_REGEXP = /^(\-?\d+((\.|\,)\d+)?)?$/;
            return {
                require: 'ngModel',
                link: function(scope, elm, attrs, ctrl) {
                    ctrl.$parsers.unshift(function(viewValue) {
                        if (FLOAT_REGEXP.test(viewValue)) {
                            ctrl.$setValidity('float', true);
                            return parseFloat(viewValue.replace(',', '.'));
                        } else {
                            ctrl.$setValidity('float', false);
                            return undefined;
                        }
                    });
                }
            };
        })

        .directive('greater', function() {
            return {
                require: 'ngModel',
                link: function(scope, elm, attrs, ctrl) {
                    ctrl.$parsers.unshift(function(viewValue) {
                        if (viewValue > attrs.greater) {
                            ctrl.$setValidity('greater', true);
                            return viewValue;
                        } else {
                            ctrl.$setValidity('greater', false);
                            return undefined;
                        }
                    });
                }
            };
        })

        .directive('less', function() {
            return {
                require: 'ngModel',
                link: function(scope, elm, attrs, ctrl) {
                    ctrl.$parsers.unshift(function(viewValue) {
                        if (viewValue < attrs.less) {
                            ctrl.$setValidity('less', true);
                            return viewValue;
                        } else {
                            ctrl.$setValidity('less', false);
                            return undefined;
                        }
                    });
                }
            };
        })

        .directive('validateDatepickerPattern',function() {
            return {
                restrict: 'A',
                priority: 1000,
                require: 'ngModel',
                link: function(scope, elem, attrs, ngModelCtrl) {
                    var regex = new RegExp(attrs.validateDatepickerPattern);
                    ngModelCtrl.$parsers.unshift(function(viewValue) {
                        if (typeof viewValue === 'string') {
                            if (!regex.test(viewValue)) {
                                ngModelCtrl.$setValidity('validate-datepicker-pattern', false);
                                return undefined;
                            }
                        }
                        ngModelCtrl.$setValidity('validate-datepicker-pattern', true);
                        return viewValue;
                    });

                }
            };
        });

}());
