(function() {
  'use strict';

  angular
    .module('app.enrollment')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: '  ',
        config: {
          url: '/home',
          templateUrl: 'app/kuzhal/enrollment/enrollment.html',
          controller: 'EnrollmentController',
          controllerAs: 'vm',
          title: 'Home',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Admin'
          }
        }
      }
    ];
  }
})();
