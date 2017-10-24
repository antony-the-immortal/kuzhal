(function() {
    'use strict';

    /**
     * @name verifyEmailPhone
     * @desc This directive provides custom date validations.
     * @returns true or false to determine whether the validation passes
     * Validation Requirements:
     *  - numeric
     *  - day must be between 1 and 31
     *  - month must be between 1 and 12s
     */
    angular.module('app.core')
        .directive('verifyEmailPhone', ['loginService', function( loginService) {

            return {
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {

                    //ngModel.$validators.verifyEmailPhone = function(value) {
                        //var status = false;
                        element.focusout(function() {
                            ngModel.$setValidity('verifyEmailPhone', true);
                            var param = (element[0].type === 'email') ? { 'emailId': element[0].value } : { 'passWd': element[0].value };
                            if (ngModel.$valid) {
                                loginService.validatePhoneEmail(param).then(function(response) {
                                    if (response === 'IN_DB') {
                                        ngModel.$setValidity('verifyEmailPhone', false);
                                    } 
                                });
                            }
                        });
                        //return status;
                    //}
                }
            };
        }]);
}());
