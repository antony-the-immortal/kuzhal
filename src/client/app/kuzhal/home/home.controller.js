(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['logger','$scope','$sce', 'session','constants','dataservice', '$rootScope', 'modalService' ,'cookie', 'landingPageContent', 'kuzhalConstants'];
  /* @ngInject */
  function HomeController(logger,$scope, $sce, session,constants,dataservice,$rootScope, modalService, cookie, landingPageContent, kuzhalConstants) {
    var vm = this;
    vm.title = 'Home';

    activate();
    function activate() {
      vm.landingPageContent = landingPageContent;
      vm.kuzhalConstants = kuzhalConstants;
      if(!cookie.getObject(constants.USER_DETAILS)){
       // modalService.showModal('app/layout/login-modals/prompt-login.html', 'prompt-login');
      }
    }
    vm.trustAsHtml = function(string){
      return $sce.trustAsHtml(string);
    }
  }
})();
