(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('FooterController', FooterController);

    FooterController.$inject = ['dataservice','$firebaseObject'];
  /* @ngInject */
  function FooterController(dataservice, $firebaseObject) {
    var vm = this;
    vm.title = 'Footer';

    activate();

    function activate() {
      var syncKuzhalInfoPageObject = $firebaseObject(dataservice.kuzhalInfo);
      syncKuzhalInfoPageObject.$bindTo(vm, "kuzhalConstants");
    }
  }
})();
