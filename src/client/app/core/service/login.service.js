(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', 'constants', 'logger', 'session','$q','spinner'];
    /* @ngInject */
    function loginService($http, constants, logger, session,$q, spinner) {
        return {
            signUp: signUp,
            signIn: signIn,
            verifyOTP: verifyOTP,
            validatePhoneEmail: validatePhoneEmail,
            forgotPassword : forgotPassword
        }

        function signUp(userData) {
            return $http.post(constants.BASE_URL + 'signup', userData)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                logger.error(error);
                spinner.hide();
                return $q.reject(error);
            }
        }

        function signIn(userData) {
            return $http.post(constants.BASE_URL + 'signin', userData)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                logger.error(error);
                spinner.hide();
                return $q.reject(error);
            }
        }

        function verifyOTP(otp) {
            var queryParams = {params: {
                      token : session.get(constants.SECURITY_TOKEN) || 'no_token'
                }};/* Query Parameters*/
            return $http.post(constants.BASE_URL + 'verifyotp', { otpEnd: otp },queryParams)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                logger.error(error);
                return $q.reject(error);
            }
        }

        function validatePhoneEmail(params) {
            return $http.post(constants.BASE_URL + 'validate', params)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                logger.error(error);
                return $q.reject(error);
            }
        }

        function forgotPassword(params) {
            return $http.post(constants.BASE_URL + 'forgotpwd', params)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                logger.error(error);
                return $q.reject(error);
            }
        }
    }
})();
