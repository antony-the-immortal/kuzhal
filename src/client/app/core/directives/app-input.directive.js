(function () {
    'use strict';

    // IMPORTANT:
    // ************************************************************************************************
    // This directive will eventually be deprecated in favor of app-text-input and other more specific
    // directives. Don't use or modify it for any new funcitonality
    // ************************************************************************************************

    angular
        .module('app.core')
        .directive('appApplicationInput',  ApplicationInputDirective);

    ApplicationInputDirective.$inject = ['$compile', 'validationMessages', 'inputConfigurations', 'inputLabels'];
    /* @ngInject */
    function ApplicationInputDirective($compile, validationMessages, inputConfigurations, inputLabels) {
        return {
            restrict: 'A',
            replace: false,
            require: '^form',
            scope: {
                formAttr: '@appApplicationInput',
                inputModel: '@inputModel',
                placeholderLabel: '@placeholderLabel',
                placeholderLabelActive: '@placeholderLabelActive',
                collapseErrors: '@collapseErrors',
            },

            link: function(scope, element, attrs, formCtrl) {
                element.addClass('inputWidget');
                element.toggleClass('alwaysShowError', (element.find('select').size() > 0) || 
                        (element.find('md-radio-group').size() > 0));
                // create the error block and insert it after the input or selectwrapper
                var errorBlock = angular.element('<div aria-live="assertive" class=" md-input-messages-animation md-auto-hide ' +
                        (scope.collapseErrors ? 'errorMessageContainerCollapse' : 'errorMessageContainer') + 
                        '"></div>');
                element.find('input, .selectWrapper, .selectRadioWrapper').after(errorBlock);

                // add the label and placeholder elements if they're not already there
                var input = element.find('input, select, md-radio-group').attr({ id: scope.formAttr }).get(0);
                if (!input) {
                    input = angular.element('<input/>');
                    element.prepend(input);
                }
                if (scope.inputModel) {
                    input.attr('ng-model', scope.inputModel);
                }
                if (inputConfigurations[scope.formAttr]) {
                    renderDirectives(inputConfigurations[scope.formAttr]);
                }

                var usePlaceholder = input.type === 'text' || input.type === 'tel' || input.type === 'email';

                var placeholderLabel = scope.placeholderLabel ||
                        (inputLabels[scope.formAttr] && inputLabels[scope.formAttr].placeholderLabel);
                var placeholderLabelActive = scope.placeholderLabelActive ||
                        (inputLabels[scope.formAttr] && inputLabels[scope.formAttr].placeholderLabelActive);

                if (element.find('label').size() === 0) {
                    element.prepend('<label for="' + scope.formAttr + '">' + placeholderLabel + ':</label>');
                }
                if (usePlaceholder && element.find('.placeholder').size() === 0) {
                    element.prepend('<div class="placeholder">' + placeholderLabel + '</div>');
                }
                if (placeholderLabelActive) {
                    element.find('.placeholder').attr('data-activeText', placeholderLabelActive);
                }

                // set up scope watchers
                scope.formCtrl = formCtrl;
                scope.$watchGroup([
                        'formCtrl.' + scope.formAttr + '.$modelValue',
                        'formCtrl.' + scope.formAttr + '.$valid',
                        'formCtrl.' + scope.formAttr + '.$touched',
                        'formCtrl.$submitted'
                    ], updateClasses);
                scope.$watchCollection('formCtrl.' + scope.formAttr + '.$error', function(errors) {
                    // masked fields are not updating the model like I expect so I updatE on error change as well
                    updateClasses();
                    updateErrors(errorBlock, errors);
                });

                // set up DOM event handlers
                // add/remove 'focus' class on the inputWidget
                angular.element(input).on('focus', function() {
                    element.addClass('focused');
                });
                angular.element(input).on('blur', function() {
                    element.removeClass('focused');
                });

                // toggle the long/short placeholder
                if (usePlaceholder) {
                    var placeholder = element.find('.placeholder');
                    input.on('focus', function() {
                        placeholder.data('originalValue', placeholder.text());
                        placeholder.text(placeholder.attr('data-activeText'));
                    });
                    input.on('blur', function() {
                        if (input.val() === '') {
                            placeholder.text(placeholder.data('originalValue'));
                        }
                    });
                }

                // focus the input when they click the error message/icon
                errorBlock.on('click', function() {
                    input.focus();
                });

                // update the state classes for this input (valid, valueEntered, error)
                function updateClasses() {
                    var formField = formCtrl[scope.formAttr];
                    if(formField){
                        element.toggleClass('isValid', formField.$valid);
                        element.toggleClass('valueEntered', formField.$dirty || (formField.$viewValue !== undefined &&
                                formField.$viewValue !== null && formField.$viewValue.length > 0));
                        element.toggleClass('error', !formField.$valid && (formField.$touched || formCtrl.$submitted));
                        /** value entered is not applied for the co applicant data since the view value of the element is object**/
                        if(formField.$name == "coApplicantsData"){
                            element.toggleClass('valueEntered', formField.$dirty || (formField.$viewValue !== undefined &&
                                formField.$viewValue !== null));
                        }
                    }
                }

                // Render the error message if there is one
                function updateErrors(errorBlock, errors) {
                    errorBlock.html('');
                    if (validationMessages[scope.formAttr]) {
                        for (var i = 0; i < validationMessages[scope.formAttr].length; i++) {
                            var item = validationMessages[scope.formAttr][i];
                            if (errors && errors[item.type]) {
                                errorBlock.html('<div class="errorMessage md-input-message-animation">' + item.message + '</div>');
                                return;
                            }
                        }
                    }
                }

                function renderDirectives(params) {
                    for (var param in params) {
                        input.attr(param, params[param]);
                    }
                    // TODO: compiling with parent scope since the local scope has no model values.. 
                    // is this the right way?
                    $compile(input)(scope.$parent);
                }

            }
        };
    }

})();
