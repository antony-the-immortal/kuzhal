(function() {
    'use strict';

    /**
     * @name appMinAmount
     * @desc This directive provides custom Minimum amount validations.
     * @returns true or false to determine whether the validation passes
     * Validation Requirements:
     *  - numeric
     */
    angular.module('app.core')
        .directive('appMinAmount', function() {

            return {
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {
                    ngModel.$validators.appMinAmount = function(value) {
                        var status = true;
                        var maxAmount = attrs.appMinAmount;
                        if(value < maxAmount)
                        {
                            status=false;
                        }
                        return status;
                    };
                }
            };
        });
}());
