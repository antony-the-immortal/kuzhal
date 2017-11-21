(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['logger','$scope','$sce','$firebaseObject', 'session','constants','dataservice', '$rootScope', 'modalService' ,'cookie'];
  /* @ngInject */
  function HomeController(logger,$scope, $sce, $firebaseObject, session,constants, dataservice,$rootScope, modalService, cookie) {
    var vm = this;
    vm.title = 'Home';

    activate();
    function activate() {
      //vm.landingPageContent = landingPageContent;
      //vm.kuzhalConstants = kuzhalConstants;
      var syncLandingPageObject = $firebaseObject(dataservice.landingPageData);
      syncLandingPageObject.$bindTo(vm, "landingPageContent");
      var syncKuzhalInfoPageObject = $firebaseObject(dataservice.kuzhalInfo);
      syncKuzhalInfoPageObject.$bindTo(vm, "kuzhalConstants");

      if(!cookie.getObject(constants.USER_DETAILS)){
       // modalService.showModal('app/layout/login-modals/prompt-login.html', 'prompt-login');
      }
    }
    vm.onShowOurClassModal = function(classObj) {
      modalService.showModal('app/layout/modal/our-classes.modal.html', 'music-class-modal', classObj);
    }

    vm.onInstrumentsModal = function(item) {
      modalService.showModal('app/layout/modal/instruments-modal.html', 'instruments-modal', item);
    }
    //Map.init();
    
  }
})();
