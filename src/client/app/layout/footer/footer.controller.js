(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('FooterController', FooterController);

    FooterController.$inject = ['logger','kuzhalConstants'];
  /* @ngInject */
  function FooterController(logger, kuzhalConstants) {
    var vm = this;
    vm.title = 'Footer';

    activate();

    function activate() {
      logger.info('Activated Footer View');
      vm.kuzhalConstants = kuzhalConstants;
    }
  }
})();
