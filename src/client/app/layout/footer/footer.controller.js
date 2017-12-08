(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('FooterController', FooterController);

    FooterController.$inject = ['dataservice','$firebaseObject', 'modalService','cookie'];
  /* @ngInject */
  function FooterController(dataservice, $firebaseObject, modalService, cookie) {
    var vm = this;
    vm.title = 'Footer';

    activate();

    function activate() {
      $firebaseObject(dataservice.kuzhalInfoRef).$loaded().then(function(data) {
        cookie.setObject("KUZHAL_INFO", data);
        vm.kuzhalConstants = data;
      });
     // vm.kuzhalConstants = (cookie.getObject("KUZHAL_INFO")) ? cookie.getObject("KUZHAL_INFO") : dataservice.getKuzhalConstants();
    }

    vm.goToAdmin = function() {
      modalService.showModal('app/layout/modal/admin-login.html', 'admin-modal', vm);
    }
  }
})();
