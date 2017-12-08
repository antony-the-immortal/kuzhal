(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['logger','$state','$scope','$rootScope', '$window','$firebaseObject', 'modalService', 'dataservice' ,'session', 'cookie', 'constants'];
  /* @ngInject */
  function HeaderController(logger, $state, $scope, $rootScope , $window, $firebaseObject, modalService,  dataservice, session, cookie, constants) {
    var vm = this;
    vm.title = 'Header';

    activate();

    function activate() {
      vm.kuzhalConstants = (cookie.getObject("KUZHAL_INFO")) ? cookie.getObject("KUZHAL_INFO") : dataservice.getKuzhalConstants();
      vm.userName = cookie.getObject(constants.USER_DETAILS) || null ;
    }
    vm.enroll = function() {
      modalService.showModal('app/kuzhal/enrollment/enrollment.html', 'enrollment-form', '');
    }
    vm.onPayment = function() {
      $window.open(vm.kuzhalConstants.kuzhalData.paymentUrl, "_blank");
    }
  }
})();

