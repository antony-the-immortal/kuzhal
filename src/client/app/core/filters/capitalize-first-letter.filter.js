(function(){
    'use strict';

    /**
     * @name capitalize
     * @desc This filter capitalizes the first letter of a string.
     */
    angular.module('app.core')
        .filter('capitalize', function () {
            return function (input) {
                if (!input)
                    return;
                input = input.toLowerCase();
                return input.substring(0,1).toUpperCase()+input.substring(1);
            };
        });
})();
