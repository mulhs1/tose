/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.common')
        .directive('ieFixNgOptions', ieFixNgOptions);

    /**
     *
     *      IE ng-options fix
     *
     *      Problem:    adding / removing items to array displayed through ng-options will not
     *                  produce any change in IE (shows the original items)
     *
     *      Solution:   hide and show select element to triger IE rendering on collection change
     *
     *
     *      Source:     https://github.com/angular/angular.js/issues/2809
     *                  http://stackoverflow.com/questions/12942681/how-to-fix-ie-select-issue-when-dynamically-changing-options/25310374#25310374
     *
     */

    // @ngInject
    function ieFixNgOptions($document) {

        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                options: '=ieFixNgOptions'
            },
            controller: IeFixNgOptionsController,
            controllerAs: 'ctrl',
            bindToController: true

        };

        function IeFixNgOptionsController($scope, $element) {
            // Only for IE
            var isIE = $document[0] && $document[0].attachEvent;
            if (!isIE) return;

            $scope.$watchCollection('options', function(newItems, oldItems) {
                // hide and show element to trigger the rendering in IE
                $element.hide();
                $element.show();
            });
        }
    }

}());
