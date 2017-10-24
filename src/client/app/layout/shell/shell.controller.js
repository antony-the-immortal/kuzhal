(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger','kuzhalConstants'];
  /* @ngInject */
  function ShellController($rootScope, $timeout, config, logger, kuzhalConstants) {
    var vm = this;
    vm.busyMessage = 'Please wait ...';
    vm.kuzhalConstants = kuzhalConstants;
    vm.isBusy = true;
    $rootScope.showSplash = true;
    activate();

    function activate() {
      logger.success(config.appTitle + ' loaded!', null);
      hideSplash();
    }

    function hideSplash() {
      //Force a 1 second delay so we can see the splash.
      $timeout(function() {
        $rootScope.showSplash = false;
      }, 1000);
    }
  }
})();
