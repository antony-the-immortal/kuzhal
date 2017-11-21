(function() {
        'use strict';

        angular
            .module('app.core')
            .factory('dataservice', dataservice);

        dataservice.$inject = ['$http', '$q','$firebaseArray', 'exception', 'logger', 'constants'];
        /* @ngInject */
        function dataservice($http, $q, $firebaseArray, exception, logger, constants) {
            
            var rootRef = firebase.database().ref();
            return {
                landingPageData : rootRef.child('landingPageData'),
                kuzhalInfo : rootRef.child('kuzhalInfo'),
            }

            /*Consumer - Get all the products for each category*/
            function getProducts(categoryCode, productID) {
                var url = constants.BASE_URL;
                switch (categoryCode) {
                    case 'CP':
                        url = url + 'getconsumerproducts';
                        break
                    case 'FS':
                        url = url + 'farmsuppliments';
                        break;
                    case 'TE':
                        url = url + 'farmsuppliments';
                        break;
                }

                return $http.get(url)
                    .then(success)
                    .catch(fail);

                function success(response) {
                    return response.data.data;
                }

                function fail(error) {
                    logger.error(error);
                    return $q.reject(error);
                }

            };

    }

})();
