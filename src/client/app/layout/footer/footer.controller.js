(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('FooterController', FooterController);

    FooterController.$inject = ['dataservice','$firebaseObject', 'modalService'];
  /* @ngInject */
  function FooterController(dataservice, $firebaseObject, modalService) {
    var vm = this;
    vm.title = 'Footer';

    activate();

    function activate() {
      var syncKuzhalInfoPageObject = $firebaseObject(dataservice.kuzhalInfo);
      syncKuzhalInfoPageObject.$bindTo(vm, "kuzhalConstants");
    }

    vm.goToAdmin = function() {
      modalService.showModal('app/layout/modal/admin-login.html', 'admin-modal', vm);
    }
  }
})();
