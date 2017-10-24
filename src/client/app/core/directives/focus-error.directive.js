(function () {
    'use strict';

    /**
     * @name focusError
     * @desc This directive sets the focus on the first input element that is invalid.
     */
    angular.module('app.core')
        .directive('focusError', ['ScrollService', function(ScrollService) {
            return {
                restrict: 'A',
                scope: {
                    focusError: '='
                },
                link: function (scope, element, attributes, ngModel) {
                    // do nothing if the flag is off
                    if (scope.focusError) {
                        scope.$on('form:validationError', function() {
                            var firstInvalid = element.find('.ng-invalid:not(form,ng-form):first');
                            ScrollService.scrollTo(firstInvalid);
                            ScrollService.executeAfterScroll(function() { firstInvalid.focus(); });
                        });
                    }
                    element.on('keyup', function(event) {
                        if (event.keyCode === 13 && scope.$parent && scope.$parent.vm && scope.$parent.vm.submit) {
                            scope.$apply(function() {
                                scope.$parent.vm.submit(scope.$parent[attributes['name']]);
                            });
                        }
                    });
                }
            };
        }]);

})();
