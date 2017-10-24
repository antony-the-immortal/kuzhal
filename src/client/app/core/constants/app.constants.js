(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('constants', {
        'VIEW_CART_ACTIVATED': 'viewCartActivated',
        'VIEW_CART_ITEMS': 'viewCartItems',
        'BASE_URL' :'http://52.89.162.29:9000/',
        'SECURITY_TOKEN' : 'token',
        'USER_LOGGED_IN_STATUS' : 'userLoggedInStatus',
        'USER_DETAILS' : 'userDetails',
        'PRODUCTS' : 'products',
        'ORDER_ID' : 'orderID',
        'APP' : 'app'
	});
})();
