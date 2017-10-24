(function(){
    'use strict';

    angular.module('app.core')
        .filter('countryFilter', ['countryList', 'lodash', function (countryList, lodash) {
            return function (input) {
                if (!input) {
                    return "";
                }
                return lodash.find(countryList, function(country) {
                    return country.countryCode === input;
                }).countryName;
            };
        }]);
})();
