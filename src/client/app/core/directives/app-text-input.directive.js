(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('appTextInput',  USBTextInputDirective);

    USBTextInputDirective.$inject = ['$compile', 'validationMessages', 'inputConfigurations', 'inputLabels'];
    /* @ngInject */
    function USBTextInputDirective($compile, validationMessages, inputConfigurations, inputLabels) {
        return {
            restrict: 'A',
            require: '^form',
            scope: {
                fieldName: '@appTextInput',
                inputModel: '@inputModel',
                placeholderLabel: '@placeholderLabel',
                //placeholderLabelActive: '@placeholderLabelActive',
                collapseErrors: '@collapseErrors',
                inputRequired: '@inputRequired',
                icon : '@icon'
            },

            link: function(scope, element, attrs, formCtrl) {
                var placeholderLabel = scope.placeholderLabel || 
                        (inputLabels[scope.fieldName] && inputLabels[scope.fieldName].placeholderLabel);
                var placeholderLabelActive = scope.placeholderLabelActive || 
                        (inputLabels[scope.fieldName] && inputLabels[scope.fieldName].placeholderLabelActive);
                
                var input = angular.element('<input/>');
                //var errorBlock = angular.element('<div aria-live="assertive" class="md-input-messages-animation md-auto-hide ' +
                //        (scope.collapseErrors ? 'errorMessageContainerCollapse' : 'errorMessageContainer') + 
                //        '"></div>');
                var fl = scope.fieldName;
                var errorBlock = angular.element('<div class="errorMessageContainer md-input-messages-animation" ng-messages="'+ formCtrl.$name +'.'+ scope.fieldName+'.$error""></div>');
                
                var label = angular.element('<label for="' + scope.fieldName + '">' + placeholderLabel + ':</label>');
                //var placeholder = angular.element('<div class="placeholder">' + placeholderLabel + '</div>');
                var icon = angular.element('<ng-md-icon icon="'+ scope.icon +'"  size="24"></ng-md-icon>');
                // add the label and placeholder elements if they're not already there
                input.attr(inputConfigurations[scope.fieldName]);
                input.attr({ 
                    'id': scope.fieldName,
                    'name': scope.fieldName,
                    'ng-model': scope.inputModel,
                    'ng-required': scope.inputRequired,
                    'aria-label' : placeholderLabel 
                });
                element.addClass('inputWidget');
                element.prepend(input); 
                
                input.after(errorBlock);
                element.prepend(icon);
                element.prepend(label);
                $compile(icon)(scope.$parent)
                $compile(input)(scope.$parent); // TODO: compiling with parent scope... Not sure if this is ideal

                // set up scope watchers
                scope.formCtrl = formCtrl;
                scope.$watchGroup([
                        'formCtrl.' + scope.fieldName + '.$modelValue',
                        'formCtrl.' + scope.fieldName + '.$valid',
                        'formCtrl.' + scope.fieldName + '.$touched',
                        'formCtrl.$submitted'
                    ], updateClasses);
                scope.$watchCollection('formCtrl.' + scope.fieldName + '.$error', function(errors) {
                    // masked fields are not updating the model like I expect so I update on error change as well
                    updateClasses();
                    updateErrors(errorBlock, errors);

                    /*To change to placeholder active text if the text inputs are pre-filled*/
                    var formField = formCtrl[scope.fieldName];
                    if(formField.$valid && (formField.$viewValue !== undefined && formField.$viewValue !== null && formField.$viewValue.length > 0)){
                        //placeholder.data('originalValue', placeholder.text());
                        //placeholder.text(placeholder.attr('data-activeText'));
                    }
                });
                input.on('focus', function() {
                    //element.removeClass('error');
                    element.addClass('focused');
                    /*placeholder.data('originalValue', placeholder.text());
                    placeholder.text(placeholder.attr('data-activeText'));*/
                });
                input.on('blur', function() {
                    element.removeClass('focused');
                    if (input.val() === '') {
                        //placeholder.text(placeholder.data('originalValue'));
                    }
                });
                
                // focus the input when they click the error message/icon
                errorBlock.on('click', function() {
                    input.focus();
                });

                // update the state classes for this input (valid, valueEntered, error)
                function updateClasses() {

                    var formField = formCtrl[scope.fieldName];
                    element.toggleClass('isValid', formField.$valid);
                    element.toggleClass('error', formField.$invalid && (formField.$dirty || formField.$touched || formCtrl.$submitted));
                    element.toggleClass('valueEntered', formField.$dirty || (formField.$viewValue !== undefined && 
                    formField.$viewValue !== null && formField.$viewValue.length > 0));
                }

                // Render the error message if there is one
                function updateErrors(errorBlock, errors) {
                    errorBlock.html('');
                    if (validationMessages[scope.fieldName]) {
                        for (var i = 0; i < validationMessages[scope.fieldName].length; i++) {
                            var item = validationMessages[scope.fieldName][i];
                            if (errors[item.type]) {
                               errorBlock.html('<div class="errorMessage md-input-message-animation" ng-message="'+ item.type +'">' + item.message + '</div>');
                               //errorBlock.html('<div class="errorMessage md-input-message-animation">' + item.message + '</div>');
                                $compile(errorBlock)(scope.$parent)
                                return;
                            }
                        }
                    }
                }

            }
        };
    }

})();
