(function() {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('authInterceptor', authInterceptor)
        .config(config);

    authInterceptor.$inject = ['$q', 'logger', 'config', 'constants', 'session'];

    /* @ngInject */
    function authInterceptor($q, logger, config, constants, session) {
        var service = {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError
        };

        return service;

        function request(config) {
            config.headers = config.headers || {};
            if (config.method.toLowerCase() === 'post' ) {
                config.headers['token'] = session.get(constants.SERVICES_DISPACTCHED);
            }
            
            //config.timeout = 10000; // in milliseconds

            /*Restrict duplicate service calls- decision, kba, afterSubmitfunding, creditIssuers,oow,validateOow*/
           // var servicesDispatched = session.get(constants.SERVICES_DISPACTCHED);
 
            var defer = $q.defer();
           return config;
            /*if (serviceStr =='decision' || serviceStr == 'kba'|| serviceStr == ','||
                serviceStr=='afterSubmit'|| serviceStr == 'creditIssuers' || serviceStr == 'oow'){
                    if (servicesDispatched[serviceStr]) {
                        defer.resolve();
                        config.timeout = defer.promise;
                        window._.extend(config.headers, {
                                ServiceCancelled: serviceStr
                        });
                        return config;
                    } else {
                        servicesDispatched[serviceStr] = true;
                        session.set('servicesDispatched',servicesDispatched);
                        return config;
                    }
            } else{
                return config;
            }*/
        }

        function requestError(rejection) {
            return $q.reject(rejection);
        };

        function response(response) {

            /*Set token in header if exists*/
            if(response.headers('token')){
                session.set(constants.SECURITY_TOKEN  ,response.headers('token'));
            }
            if(response.zResponse && parseInt(response.zResponse.responseCode) % 2 != 0){
                return $q.reject(response) 
            } 
            return response || $q.when(response);
            
            
        };

        function responseError(rejection) {
            if (rejection.config.ignoreResponseErrors) {
                return;
            } else if (rejection.config.headers.hasOwnProperty('ServiceCancelled')) {
                logger.error('Duplicate service of ' + rejection.config.headers.ServiceCancelled + ' cancelled');
                return $q.reject(rejection); // error not handled
            } else{
                if (rejection.status === 404 || rejection.status === 0) {
                    //Auth.redirectToTechnicalDifficulties();
                    //SessionUtils.clearSession();
                    return false; // stop the promise chain
                }
                if ((rejection.status >= 500) && (rejection.status < 600)) {
                    console.log('The server is not available so we cannot proceed with your application.');
                    //Auth.redirectToTechnicalDifficulties();
                    //SessionUtils.clearSession();
                    return false; // stop the promise chain
                }
               if (rejection.status === 400) {
                    console.log('The server is down');
                    //Auth.redirectToTechnicalDifficulties();
                    //SessionUtils.clearSession();
                }
                if (rejection.status === 403) {
                    logger.error('Redirecting to the login page.');
                    //SessionUtils.clearSession();
                    //Auth.redirectToLogin();
                }
                if(rejection.status === 428){
                    logger.error('Application is locked by other user');
                    //SessionUtils.clearSession();
                    //Auth.redirectToApplicationLocked();
                }
                return $q.reject(rejection);
            }
        };

    }

    config.$inject = ['$httpProvider'];

    /* @ngInject */
    function config($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }

}());
