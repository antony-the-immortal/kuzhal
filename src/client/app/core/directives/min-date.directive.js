(function() {
    'use strict';

    /**
     * @name minDate
     * @desc Validates a date is within a min number of years in the future.
     */
    angular.module('app.core')
        .directive('appMinDate', ['utils', function(utils) {
            return {
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {
                    ngModel.$validators.appMinDate = function(value) {
                        var maxYearsInFuture = attrs.minDate;
                        if (!value || value.length === 0 || !maxYearsInFuture) {
                            return false;
                        }

                        value = value.replace(/\//g, '');
                        var today = new Date();
                        var maxYearsInFutureInt = parseInt(maxYearsInFuture, 10);
                        var combinedYear = (today.getFullYear() + maxYearsInFutureInt);
                        today.setFullYear(2014 + 50);
                        var millisDateInFuture = today.getTime();
                        var millisToCompareWith = null;

                        if (element.attr('type') === 'date') {
                            millisToCompareWith = value.getTime();
                        } else if (element.attr('type') !== 'date') {
                            var dateString = utils.getDateString(value);
                            millisToCompareWith = new Date(dateString).getTime();
                        } else {
                            return false;
                        }
                        return (millisDateInFuture < millisToCompareWith);
                    };
                }
            };

        }]);

}());
