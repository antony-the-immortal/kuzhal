(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('utils', utils);

    utils.$inject = ['$rootScope', 'logger'];

    /* @ngInject */
    function utils($rootScope, logger) {

        var service = {
            generateOrderID : generateOrderID
        };

        return service;
        /////////////////////
        function generateOrderID()
        {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for( var i=0; i < 5; i++ )
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
        }
        
    }

})();
