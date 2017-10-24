(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['logger','$scope','$sanitize', 'session','constants','dataservice', '$rootScope', 'modalService' ,'cookie', 'landingPageContent'];
  /* @ngInject */
  function HomeController(logger,$scope, $sanitize, session,constants,dataservice,$rootScope, modalService, cookie, landingPageContent) {
    var vm = this;
    vm.title = 'Home';

    activate();
    function activate() {
      vm.landingPageContent = landingPageContent;
      if(!cookie.getObject(constants.USER_DETAILS)){
       // modalService.showModal('app/layout/login-modals/prompt-login.html', 'prompt-login');
      }
    }
    vm.trustAsHTML = function(html){
      return $sanitize(html)
    }
  }
})();
