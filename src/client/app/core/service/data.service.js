(function() {
        'use strict';

        angular
            .module('app.core')
            .factory('dataservice', dataservice);

        dataservice.$inject = ['$http', '$q', 'exception', 'logger', 'constants'];
        /* @ngInject */
        function dataservice($http, $q, exception, logger, constants) {
            return {
                getProducts: getProducts,
                orderProducts: orderProducts,
                postProducts: postProducts
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

            /*Consumer - Order the cart products*/
            function orderProducts(orderID, cart) {
                var url = constants.BASE_URL + 'orderproducts';
                var params = { "orderId": "", "CartModel": [{ "productID": "", "orderQty": "" }] };
                return $http.post(url, params)
                    .then(success)
                    .catch(fail);

                function success(response) {
                    return response.data.data;
                }

                function fail(error) {
                    logger.error(error);
                    return $q.reject(error);
                }
            }


            /*Admin - post new products*/
            function postProducts(products, categoryCode) {
                var url = constants.BASE_URL;
                switch (categoryCode) {
                    case 'CP':
                        url = url + 'postconsumerproducts';
                        break
                    case 'FS':
                        url = url + 'postfarmsupplements';
                        break;
                    case 'TE':
                        url = url + 'posttechnologysolutions';
                        break;
                }
                return $http.post(url, products)
                    .then(success)
                    .catch(fail);
                function success(response) {
                    return response.data.data;
                }

                function fail(error) {
                    logger.error(error);
                    return $q.reject(error);
                }
            }

            /*Consumer - update/add address*/
            function updateAddress(addressType, address) {
                var url = constants.BASE_URL + 'updateaddress';
                var params = { "addressType": addressType , 
                               "address": address 
                             };
                return $http.post(url, params)
                    .then(success)
                    .catch(fail);

                function success(response) {
                    return response.data.data;
                }

                function fail(error) {
                    logger.error(error);
                    return $q.reject(error);
                }
            }

            /*Consumer - search products*/
            function searchProducts(products, categoryCode) {
                var url = constants.BASE_URL + 'searchproducts';
                var params = { "productName": "Dal" };
                return $http.post(url, params)
                    .then(success)
                    .catch(fail);

                function success(response) {
                    return response.data.data;
                }

                function fail(error) {
                    logger.error(error);
                    return $q.reject(error);
                }
            }
    }

})();
