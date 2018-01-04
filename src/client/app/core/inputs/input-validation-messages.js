(function () {
    'use strict';

    /*
    * This is where all of our input validation messages are. Messages are resolved using [input name].[validation type].
    * NOTE: the order of the messages for each field matters as that is what decides message precendence (what errors shows
    * when there are multiple validation rules triggered)
    */
    angular.module('app.core').constant('validationMessages', {

          //promo code field
        'promocode': [
            { type: 'pattern', message: 'Please use letters and numbers only.' },
            { type: 'minlength', message: 'Promotion codes have 7 characters. Please try again.' },
            { type: 'maxlength', message: 'Promotion codes have 7 characters. Please try again.' }
        ],
        'firstName': [
            { type: 'required', message: 'Please enter your first name.' },
            { type: 'pattern', message: 'Please use letters only.' },
            { type: 'maxlength', message: 'First Name should not exceed 15 characters.' }
        ],
        'middleName': [
            { type: 'required', message: 'Please enter your middle name.' },
            { type: 'pattern', message: 'Please use letters only.' },
            { type: 'maxlength', message: 'First Name should not exceed 15 characters.' }
        ],
        'lastName': [
            { type: 'required', message: 'Please enter your last name.' },
            { type: 'pattern', message: 'Please use letters only.' },
            { type: 'maxlength', message: 'Last Name should not exceed 20 characters.' }
        ],
        'username' : [
            { type: 'required', message: 'Please enter your last name.' },
            { type: 'pattern', message: 'Please use letters only.' },
            { type: 'maxlength', message: 'User Name should not exceed 20 characters.' },
            { type: 'notValid', message: 'User name does not match with our records.'}
        ],
        'streetAddress': [
            { type: 'required', message: 'Please enter your street address.' },
            { type: 'appValidStreetAddress', message: 'Please enter a valid street address.' },
            { type: 'maxlength', message: 'Street address should not exceed 40 characters.' },
            { type :'appNoPostOfficeBox',message :'Please enter a valid street address.' }
        ],
        'zip': [
            { type: 'required', message: 'Please enter your ZIP Code.' },
            { type: 'number', message: 'We don\'t recognize that ZIP Code. Please try again.' },
            { type: 'appValidZip', message: 'We don\'t recognize that ZIP Code. Please try again.' },
            { type: 'maxlength', message: 'ZIP code should not exceed 5 digits.' }
        ],
        'alternateMailingAddressZip': [
            { type: 'required', message: 'Please enter your ZIP Code.' },
            { type: 'number', message: 'We don\'t recognize that ZIP Code. Please try again.' },
            { type: 'appValidZip', message: 'We don\'t recognize that ZIP Code. Please try again.' },
            { type: 'maxlength', message: 'ZIP code should not exceed 5 digits.' }
        ],
        'years': [
            { type: 'required', message: 'Please enter years.' },
            { type: 'pattern', message: 'Please use numbers only.' },
            { type: 'minLived', message: 'Please enter valid number of years and months.' },
            { type :'minLivedAge' ,message :'The number of years you\'ve lived at your address can\'t be more than your age. Please correct the length of time you\'ve lived at your address, your birth date, or both.'}
        ],
        'months': [
            { type: 'required', message: 'Please enter months.' },
            { type: 'pattern', message: 'Please use numbers only.' },
            { type: 'minLived', message: 'Please enter valid number of years and months.' },
            { type :'minLivedAge' ,message :'The number of years you\'ve lived at your address can\'t be more than your age. Please correct the length of time you\'ve lived at your address, your birth date, or both.'}
        ],
        'upiAddress': [
            { type: 'required', message: 'Please enter your upi address.' },
            { type: 'email', message: 'Please enter your url in this format: user@example.com.' },
            { type: 'minlength',message:'URL should be atleast 7 characters.'},
            { type: 'maxlength', message: 'URL should not exceed 48 characters.' },
        ],
        'email': [
            { type: 'required', message: 'Please enter your email address.' },
            { type: 'email', message: 'Please enter your email in this format: user@example.com.' },
            { type: 'appValidEmail', message: 'Please enter your email in this format: user@example.com.' },
            { type: 'minlength',message:'Email should be atleast 7 characters.'},
            { type: 'maxlength', message: 'Email should not exceed 48 characters.' },
            { type: 'verifyEmailPhone', message: 'Email already exists.Please try login' }
        ],
        'loginEmail': [
            { type: 'required', message: 'Please enter your email address.' },
            { type: 'email', message: 'Please enter your email in this format: user@example.com.' },
            { type: 'appValidEmail', message: 'Please enter your email in this format: user@example.com.' },
            { type: 'minlength',message:'Email should be atleast 7 characters.'},
            { type: 'maxlength', message: 'Email should not exceed 48 characters.' },
            { type: 'verifyEmailPhone', message: 'Email already exists.Please try login' }
        ],
        'phone': [
            { type: 'mask', message: 'Hmm. That doesn\'t look like a phone number. Please try again.' },
            { type: 'required', message: 'Please enter your phone number.' },
            { type: 'number', message: 'Hmm. That doesn\'t look like a phone number. Please try again.' },
            /*{ type:'appNotAllZeros',message:'Hmm. That doesn\'t look like a phone number. Please try again.'},
            { type: 'appValidPhone', message: 'Hmm. That doesn\'t look like a phone number. Please try again.' },*/
            { type: 'pattern', message: 'Hmm. That doesn\'t look like a phone number. Please try again.' },
            { type: 'verifyEmailPhone', message: 'Phone already exists.Please try login' }
        ],
        'city': [
            { type: 'required', message: 'Please enter your city.' },
            { type: 'maxlength', message: 'City name should not exceed 40 characters.' },
            { type: 'pattern', message: 'We don\'t recognize that City. Please try again.' }
        ],
        'birthDate': [
            { type: 'mask', message: 'Please enter your birth date.' },
            { type: 'date', message: 'Please enter your birth date.' },
            { type: 'required', message: 'Please enter your birth date.' },
            { type: 'appValidDate', message: 'Hmm. That doesn\'t look like a date. Please try again.' },
            { type: 'appMinAge', message: 'We\'re sorry. You need to be at least 18 years old to apply.' },
            { type: 'appMaxAge', message: 'We\'re sorry. You need to be under 120 years old to apply.' },     
            { type: 'appNotFutureDate', message: 'We\'re sorry. birth date cannot be future date' }
        ],
        'pan': [
            { type: 'mask', message: 'Please enter your Social Security Number.' },
            { type: 'required', message: 'Please enter your Social Security Number.' },
            { type: 'number', message: 'Hmm. That doesn\'t look like a Social Security Number. Please try again.' },
            { type: 'appValidSsn', message: 'Hmm. That doesn\'t look like a Social Security Number. Please try again.' }

        ],
        'password': [
            { type: 'required', message: 'Please enter a password.' },
            { type: 'pattern', message: 'Password must be atleast 6 characters with atleast one lowercase,one uppercase,one spceial characters,one number.' },
            { type: 'notMatch', message: 'Password doesn\'t match'}
        ],
        'confirmPassword': [
            { type: 'required', message: 'Please confirm your password.' },
            { type: 'pattern', message: 'Password must be atleast 6 characters with any of the following : atleast one lowercase,one uppercase,one spceial characters,one number.' },
            { type: 'confirm', message: 'Password din\'t match '},
            { type: 'notMatch', message: 'Password doesn\'t match' }
        ],
        'cardNumber': [
            { type: 'required', message: 'Please enter name on the card.' },
            { type: 'pattern', message: 'Please use only numbers' },
        ],
        'cardName': [
            { type: 'required', message: 'Please enter name on the card.' },
            { type: 'pattern', message: 'Please use only letters' },
            { type: 'maxlength', message: 'Name name should not exceed 15 characters.' },
        ],
        'cardExpDate': [
            { type: 'mask', message: 'Please enter your card expriry date.' },
            { type: 'date', message: 'Please enter your card expriry date.' },
            { type: 'required', message: 'Please enter your card expriry date.' },
            { type: 'appValidDate', message: 'Hmm. That doesn\'t look like a date. Please try again.' },
            { type: 'appPastDate', message: 'We\'re sorry. birth date cannot be future date' }
        ],
        'cardCVV': [
            { type: 'mask', message: 'Please enter your card CVV.' },
            { type: 'pattern', message: 'Please enter numbers only.' },
            { type: 'required', message: 'Please enter your card CVV.' },
        ],
    });

}());
