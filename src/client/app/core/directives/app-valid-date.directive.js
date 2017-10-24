(function() {
    'use strict';

    /**
     * @name appValidDate
     * @desc This directive provides custom date validations.
     * @returns true or false to determine whether the validation passes
     * Validation Requirements:
     *  - numeric
     *  - day must be between 1 and 31
     *  - month must be between 1 and 12s
     */
    angular.module('app.core')
        .directive('appValidDate', ['utils', function(utils) {

            var REGEX_PATTERNS = [
                /^[0-9]{8}$/
            ];

            return {
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {
                    ngModel.$validators.appValidDate = function(value) {

                        if (!value || value.length === 0) {
                            if(!attrs.required){
                                return true;
                            }
                            return false;
                        }

                        value = value.replace(/\//g, '');
                        var status = true;
                        var validDate = true;
                        var dateString = null;

                        if (value.length > 4) {
                            angular.forEach(REGEX_PATTERNS, function(pattern) {
                                status = status && pattern.test(value);
                            });

                            var today = new Date();
                            var hours = today.getHours();
                            var minutes = today.getMinutes();
                            var seconds = today.getSeconds();

                            if(minutes.toString().length === 1) {
                                minutes = '0' + minutes;
                            }
                            if(seconds.toString().length === 1) {
                                seconds = '0' + seconds;
                            }
                            dateString = utils.getDateString(value);
                            var getDOBDate = dateString + 'T' + hours + ':' + minutes + ':' + seconds + '+00:00';
                            validDate = utils.isValidDate(dateString)
                        } else {
                            dateString = value ? (value.substring(0, 2) + '/' + value.substring(2, 4)) : '';
                            var match = dateString.match(/^\s*(0?[1-9]|1[0-2])\/(\d\d|\d{4})\s*$/);
                            if (match) {
                                validDate = !isNaN((new Date(utils.normalizeYear(1 * value.substring(2, 4)),
                                    1 * value.substring(0, 2), 0)).getTime());
                            } else {
                                status = false;
                                validDate = false;
                            }
                        }
                        return status && validDate;
                    };
                }
            };
        }]);
}());
