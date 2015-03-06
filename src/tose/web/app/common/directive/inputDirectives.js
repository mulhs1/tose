/* global angular */
(function () {
    "use strict";

    angular.module('angular-seed.common')
    
        .directive('selectCountry', function($translate) {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    selectCountry: '=',
                    selectCountryName: '@'
                },
                template:
                    '<select class="form-control" name="{{selectCountryName}}"' +
                        'ng-model="selectCountry" ng-options="code as code + \' - \' + countryCodesNames[code].name for code in countryCodes">' +
                        '<option value="">{{"common.countries.select" | translate}}</option>' +
                    '</select>',
                link: function(scope, element, attr) {

                    scope.countryCodes = [
                        "AE",
                        "AL",
                        "AR",
                        "AT",
                        "AU",
                        "BA",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "BY",
                        "CA",
                        "CH",
                        "CL",
                        "CN",
                        "CO",
                        "CR",
                        "CS",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HR",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IQ",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KR",
                        "KW",
                        "LB",
                        "LT",
                        "LU",
                        "LV",
                        "LY",
                        "MA",
                        "ME",
                        "MK",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PR",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "RS",
                        "RU",
                        "SA",
                        "SD",
                        "SE",
                        "SG",
                        "SI",
                        "SK",
                        "SV",
                        "SY",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "UA",
                        "US",
                        "UY",
                        "VE",
                        "VN",
                        "YE",
                        "ZA"
                    ];

                    scope.countryCodesNames = {};
                    scope.countryCodes.forEach(function(code) {
                        $translate('common.countries.' + code).then(function (message) {
                            scope.countryCodesNames[code] = {
                                code: code,
                                name: message
                            };
                        });
                    });

                }
            };
        });



}());
