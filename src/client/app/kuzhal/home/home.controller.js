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
      //vm.landingPageContent = (cookie.getObject("LANDING_INFO")) ? cookie.getObject("LANDING_INFO") : dataservice.getLandingPageData();
      //vm.kuzhalConstants = (cookie.getObject("KUZHAL_INFO")) ? cookie.getObject("KUZHAL_INFO") : dataservice.getKuzhalConstants();
      $firebaseObject(dataservice.landingPageRef).$loaded().then(function(data) {
        cookie.setObject("LANDING_INFO", data);
        vm.landingPageContent = data;
      });
      $firebaseObject(dataservice.kuzhalInfoRef).$loaded().then(function(data) {
        cookie.setObject("KUZHAL_INFO", data);
        vm.kuzhalConstants = data;
      });
      vm.carouselInitializer = function() {
        $("#owl-carousel").owlCarousel({
          items: 10,
          navigation: true,
          pagination: false,
          navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
      };
    }
    vm.showInstructions = function(data) {
      modalService.showModal('app/layout/modal/quiz-modal.html', 'quiz-modal',data);
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
