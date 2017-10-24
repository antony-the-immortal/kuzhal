(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('inputConfigurations', {

            'firstName': {
                'type': 'text',
                'required': '',
                'ng-pattern': '/^[A-Za-z \s\.\-]+$/',
                //'capitalize-first-letter': '',
                'maxlength': '15',
                'autocapitalize': 'on',
                'autocorrect': 'off',
                'ng-model-options': '{ updateOn: blur }'
            },
            'middleName': {
                'type': 'text',
                //'required': '',
                'ng-pattern': '/^[A-Za-z \s\.\-]+$/',
                //'app-capitalize-first-letter': '',
                //'app-capitalize-letter-after-hyphen': '',
                'maxlength': '15',
                'autocapitalize': 'on',
                'autocorrect': 'off',
                'ng-model-options': '{ updateOn: blur }'
            },
            'lastName': {
                'type': 'text',
                'required': '',
                'ng-pattern': '/^[A-Za-z \s\.\-]+$/',
                //'app-capitalize-first-letter': '',
                //'app-capitalize-letter-after-hyphen': '',
                'maxlength': '15',
                'autocapitalize': 'on',
                'autocorrect': 'off'
            },
            'cardName': {
                'type': 'text',
                'required': '',
                'ng-pattern': '/^[A-Za-z \s\.\-]+$/',
                //'app-capitalize-first-letter': '',
                //'app-capitalize-letter-after-hyphen': '',
                'maxlength': '15',
                'autocapitalize': 'on',
                'autocorrect': 'off'
            },
            'streetAddress': {
                'type': 'text',
                'required': '',
                'autocorrect': 'off',
                //'app-valid-street-address': '',
                'maxlength': '40',
                //'app-capitalize-first-letter': '',
                'autocapitalize': 'on'
            },
            'state': {
                'type': 'text',
                'required': '',
                'autocorrect': 'off',
                'ng-model-options': '{ updateOn: "blur" }',
                'maxlength': '25',
                //'app-capitalize-every-word': '',
                'ng-pattern': '/^[a-zA-Z \'._-]+$/',
                //'app-characters-allowed': '[a-zA-Z ._-]',
                'autocapitalize': 'on'
            },
            'city': {
                'type': 'text',
                'required': '',
                'autocorrect': 'off',
                'ng-model-options': '{ updateOn: "blur" }',
                'maxlength': '25',
                //'app-capitalize-every-word': '',
                'ng-pattern': '/^[a-zA-Z \'._-]+$/',
                //'app-characters-allowed': '[a-zA-Z ._-]',
                'autocapitalize': 'on'
            },
            'zipCode': {
                'type': 'tel',
                'ng-pattern': '/^[0-9]*/',
                'required': '',
                //'app-valid-zip': '',
                //'app-characters-allowed': '[0-9]',
                'maxlength': '6'
            },
            'share': {
                'type': 'tel',
                'required': '',
                //'app-characters-allowed': '[0-9%]',
               // 'app-share-amount': '1-100',
                //'app-input-formatter':'%',
                //'formatter':'%',
                'maxlength': '4'
            },
            'amount': {
                'type': 'tel',
                //'app-currency-formatter': '',
                //'app-characters-allowed': '[0-9$,]',
                'maxlength': '8',
                //'app-optional-amt': '99',
                //'app-max-amount': '999999'

            },
            'email': {
                'type': 'email',
                'required': '',
                //'app-valid-email': '',
                'maxlength': '48',
                'minlength': '7'
                //'verify-email-phone' :''
            },
            'upiAddress' : {
                'type': 'url',
                'required': '',
                //'app-valid-email': '',
                'maxlength': '48',
                'minlength': '7'
            },
            'loginEmail': {
                'type': 'email',
                'required': '',
                //'app-valid-email': '',
                'maxlength': '48',
                'minlength': '7'
            },
            'noOfDependent': {
                'type': 'tel',
                'required': '',
                'ng-model-options': '{ allowInvalid: true }',
                'ng-pattern': '/^[0-9]/',
                //'app-characters-allowed': '[0-9]',
                'maxlength': '2'
            },
            'phone': {
                'type': 'tel',
                'required': '',
                'ng-model-options': '{ allowInvalid: true }',
                //'ui-mask': '(999) 999-9999',
                //'app-valid-phone': '',
                //'app-not-all-zeros': '',
                'ng-pattern': '/^[789]\\d{9}$/',
                //'verify-email-phone' :''
            },
            'years': {
                'type': 'tel',
                'ng-pattern': '/^[0-9]{0,2}/',
                //'app-characters-allowed': '[0-9]',
                'maxlength': '2',
                //'app-min-lived': '',
                'ng-model-options': '{ updateOn: blur }',
            },
            'birthDate': {
                'type': 'tel',
                'required': '',
                //'app-not-future-date': '',
                //'app-valid-date': '',
                //'app-max-age': '120',
                //'app-min-age': '18',
                //'app-characters-allowed': '[0-9/]',
                'ng-pattern': '/^[0-9/]*/',
                'model-view-value': 'true',
                'ui-mask': '99/99/9999',
                'ui-mask-placeholder': 'dd/mm/yyyy',
                'autocorrect': 'off'
            },
            'cardExpDate' :{
                'type': 'tel',
                'required': '',
                //'app-not-future-date': '',
                //'app-valid-date': '',
                //'app-max-age': '120',
                //'app-min-age': '18',
                //'app-characters-allowed': '[0-9/]',
                'ng-pattern': '/^[0-9/]*/',
                'model-view-value': 'true',
                'ui-mask-placeholder': 'mm/yyyy',
                'ui-mask': '99/9999',
                'autocorrect': 'off'
            },
            'cardCVV' : {
                'type': 'password',
                'required': '',
                'maxlength' :'3',
                //'ui-mask': '999-99-9999',
               // 'app-valid-pan': '',
                'ng-pattern': '/^[0-9]*/',
                'autocomplete': 'off'
            },
            'pan': {
                'type': 'tel',
                'required': '',
                //'ui-mask': '999-99-9999',
               // 'app-valid-pan': '',
                'ng-pattern': '/^[0-9]*/',
                'autocomplete': 'off'
            },
            'idNumber': {
                //'app-characters-allowed': '[a-zA-Z0-9.*-]',
                'ng-pattern': '/^[a-zA-Z0-9.*-]*/',
                'maxlength': '25',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'autocomplete': 'off'
            },
            'cardNumber': {
                //'app-characters-allowed': '[a-zA-Z0-9.*-]',
                'ng-pattern': '/^[0-9-]*/',
                'ui-mask': '9999-9999-9999-9999',
                'maxlength': '16',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'autocomplete': 'off',
                'required' :''
            },
            'password': {
                'required': '',
                'type': 'password',
                //'app-characters-allowed': '[0-9]',
                'ng-pattern': '/(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'autocomplete': 'off',
                'ng-model-options': '{ allowInvalid: true }',
            }, 
            'confirmPassword': {
                'required': '',
                'type': 'password',
                //'app-characters-allowed': '[0-9]',
                'ng-pattern': '/(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'autocomplete': 'off',
                'ng-model-options': '{ allowInvalid: true }',
            },          
            'promocode': {
                'type': 'text',
                'minlength': '7',
                'maxlength': '7',
                //'app-characters-allowed': '[a-zA-Z0-9]',
                'ng-pattern': '/^[a-zA-Z0-9]*$/',
                'ng-trim': 'false'
            },
            'accNumber': {
                'type': 'tel',
                'pattern': '^[0-9]{12}$',
                'maxlength': '12',
                //'app-characters-allowed': '[0-9]',
                //'app-account-number-validator': ''
            }

        });

})();
