(function() {
    'use strict';

    /**
     * @name maxDate
     * @desc Validates a date is within a max number of years in the future.
     */

    angular.module('app.core')
        .directive('appMaxDate', ['utils', function(utils) {
            return {
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {
                    ngModel.$validators.appMaxDate = function(value) {
                        var maxYearsInFuture = attrs.appMaxDate;
                        if (!value || value.length === 0 || !maxYearsInFuture) {
                            return false;
                        }
                        value = value.replace(/\//g, '');
                        var today = new Date();
                        var maxYearsInFutureInt = parseInt(maxYearsInFuture, 10);
                        var combinedYear = (today.getFullYear() + maxYearsInFutureInt);
                        today.setFullYear(combinedYear);
                        var millisDateInFuture = today.getTime();
                        var millisToCompareWith = null;

                        if (element.attr('type') === 'date') {
                            millisToCompareWith = value.getTime();
                        } else if (element.attr('type') !== 'date') {
                            if(value.length > 4) {
                                var dateString = utils.getDateString(value);
                                millisToCompareWith = new Date(dateString).getTime();
                            } else {
                                var normalizedYear = utils.normalizeYear(1 * value.substring(2, 4));
                                millisToCompareWith = new Date(normalizedYear, 1 * value.substring(0, 2),0).getTime();
                            }
                        } else {
                            return false;
                        }
                       return (millisDateInFuture > millisToCompareWith);
                    };
                }
            };

        }]);

}());
