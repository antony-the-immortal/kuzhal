(function(){
    'use strict';

    /**
     * @name capitalizeFirstLetter
     * @desc This directive uppercases the first letter of the string passed in.
     */
    angular.module('app.core')
        .directive('appCapitalizeFirstLetter', ['$parse', function ($parse) {
            return {
                require: '?ngModel',
                link: function (scope, element, attrs, modelCtrl) {
                    var capitalize = function(inputValue) {
                        if (inputValue === undefined || inputValue === null) { 
                            inputValue = ''; 
                        }
                        var capitalized = inputValue.substring(0,1).toUpperCase() + inputValue.substring(1);
                        if (capitalized !== inputValue) {
                            modelCtrl.$setViewValue(capitalized);
                            modelCtrl.$render();
                        }         
                        return capitalized;
                    };
                    modelCtrl.$parsers.push(capitalize);
                    capitalize($parse(attrs.ngModel)(scope));
                }
            };
        }]);

})();
