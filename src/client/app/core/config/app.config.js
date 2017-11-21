(function() {
  'use strict';

  var core = angular.module('app.core');

  core.config(toastrConfig);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  var config = {
    appErrorPrefix: '[Kuzhal Error] ',
    appTitle: 'Kuzhal',
    baseURL : 'http://localhost:9000/'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }
  core.run(firebaseConfig);
  function firebaseConfig() {
    var config = {
      apiKey: "AIzaSyBAnYVDul9wufxAw9VRpmO_wHqW3R9D2ho",
      authDomain: "kuzhal-7e16a.firebaseapp.com",
      databaseURL: "https://kuzhal-7e16a.firebaseio.com",
      projectId: "kuzhal-7e16a",
      storageBucket: "kuzhal-7e16a.appspot.com",
      messagingSenderId: "309348069059"
    };
    firebase.initializeApp(config);
  }

})();
