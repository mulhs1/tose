/* global angular */
(function () {
    "use strict";

    angular.module('angular-seed.common')

        .directive("popoverHtmlUnsafePopup", function () {
            return {
                restrict: "EA",
                replace: true,
                scope: { title: "@", content: "@", placement: "@", animation: "&", isOpen: "&" },
                templateUrl: "common/template/popover-html-unsafe-popup.tpl.html"
            };
        })

        .directive("popoverHtmlUnsafe", function ($tooltip) {
              return $tooltip("popoverHtmlUnsafe", "popover", "click");
        });

}());

