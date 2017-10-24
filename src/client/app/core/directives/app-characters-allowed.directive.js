(function () {
    'use strict';

    /**
     * @name charactersAllowed
     * @desc This directive only allows characters included in the list inside the input field.
     */
    angular.module('app.core')
        .directive('appCharactersAllowed', function() {
            var WHICH_EXCEPTIONS = [0, 8, 9, 13, 37, 39, 46];
            return {
                link: function(scope, element) {
                    var regEx = new RegExp(element.attr('app-characters-allowed') !== "" ? element.attr('app-characters-allowed') : "*");

                    // on each keystroke validate the character
                    element.bind('keypress', function(event) {
                        if (WHICH_EXCEPTIONS.indexOf(event.which) >= 0 && (!event.shiftKey)) {
                            return;
                        }
                        if (!regEx.test(String.fromCharCode(event.which))) {
                            event.preventDefault();
                        }
                    });

                    // handle pastes or other ways to get values into the field without typeing (autocomplete perhaps)
                    element.bind('change', function(event) {
                        var newValue = "";
                        for (var i=0; i<event.target.value.length; i++) {
                            newValue += regEx.test(event.target.value.charAt(i)) ? event.target.value.charAt(i) : "";
                        }
                        if (event.target.value !== newValue) {
                            event.target.value = newValue;
                            //scope.$apply();
                            /*If $apply or $digest not in progress*/
                            if(!scope.$$phase) {
                                scope.$apply();
                            }
                        }
                    });
                }
            }
        });
})();
