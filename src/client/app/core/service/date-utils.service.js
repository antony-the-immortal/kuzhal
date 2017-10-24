(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('DateUtilService', function() {

            function getDate(input) {
                if (input instanceof Date) {
                    return input;
                } else if (typeof input === 'string') {
                    var string = input.replace(/\//g, '');
                    if (string.length === 4) {
                        return new Date(string.substring(0, 2) + '/' + string.substring(2, 4));
                    } else {
                        return new Date(string.substring(0, 2) + '/' + string.substring(2, 4) + '/' + string.substring(4));
                    }
                } else {
                    return null;
                }
            }

            function getAge(input) {
                var today = new Date();
                var birthDate = getDate(input);
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            }

            var normalizeYear = function(year) {
                // Century fix
                var YEARS_AHEAD = 50;
                if (year < 100){
                    var nowYear = new Date().getFullYear();
                    year += Math.floor(nowYear/100) * 100;
                    if (year > nowYear + YEARS_AHEAD) {
                        year -= 100;
                    } else if (year <= nowYear - 100 + YEARS_AHEAD) {
                        year += 100;
                    }
                }
                return year;
            };

            var getDateString = function(value) {
                var dateString = value ? value.substring(0, 2) +
                '/' +
                value.substring(2, 4) +
                '/' +
                value.substring(4, 8) : '';
                return dateString;
            };

            return {
                getDate: getDate,
                getAge: getAge,
                normalizeYear: normalizeYear,
                getDateString: getDateString
            };
        });
}());
