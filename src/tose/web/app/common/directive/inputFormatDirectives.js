/* global angular */
(function () {
    "use strict";

    angular.module('angular-seed.common')

        .directive('inputFormatIban', ['$filter', function ($filter) {
            return {
                require: '?ngModel',
                link: function (scope, elem, attrs, ctrl) {
                    if (!ctrl) return;

                    ctrl.$formatters.unshift(function () {
                        return format(ctrl.$modelValue);
                    });

                    ctrl.$parsers.unshift(function (viewValue) {
                        var plainValue = viewValue.replace(/ /g, '');
                        elem.val(format(plainValue));
                        return plainValue;
                    });

                    function format(value) {
                        if (!value) return;
                        var formattedValue = "",
                            i;
                        for (i = 0; i < value.length; i++) {
                            var append;
                            if ((i) % 4 === 0) {
                                formattedValue += ' ';
                            }
                            formattedValue += value[i];
                        }
                        return formattedValue;
                    }
                }
            };
        }]);

}());


