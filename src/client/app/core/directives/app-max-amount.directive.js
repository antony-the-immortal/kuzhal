(function() {
    'use strict';

    /**
     * @name appMaxAmount
     * @desc This directive provides custom Minimum amount validations.
     * @returns true or false to determine whether the validation passes
     * Validation Requirements:
     *  - numeric
     */
    angular.module('app.core')
        .directive('appMaxAmount', function() {

            return {
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {
                    ngModel.$validators.appMaxAmount = function(value) {
                        var status = true;
                        var maxAmount = attrs.appMaxAmount;
                        if(value > maxAmount)
                        {
                            status=false;
                        }
                        return status;
                    };
                }
            };
        });
}());
