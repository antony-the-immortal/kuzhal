(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('EnrollmentController', EnrollmentController);

  EnrollmentController.$inject = ['logger','$scope','$sce','$window', 'session','constants','dataservice', '$rootScope', 'modalService' ,'cookie', 'landingPageContent', 'kuzhalConstants'];
  /* @ngInject */
  function EnrollmentController(logger,$scope, $sce, $window, session,constants,dataservice,$rootScope, modalService, cookie, landingPageContent, kuzhalConstants) {
    var vm = this;
    vm.title = 'Enroll';
    vm.kuzhalConstants = kuzhalConstants;
    activate();
    function activate() {
      
    }

    vm.onPayment = function(form) {
      $window.open(vm.kuzhalConstants.kuzhalData.paymentUrl, "_blank");
    }
  }
})();
