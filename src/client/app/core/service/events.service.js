(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('events', events);

    events.$inject = ['$rootScope', 'logger'];

    /* @ngInject */
    function events($rootScope, logger) {

        var service = {
            /*refreshHeader: refreshHeader,
            refreshSidebar: refreshSidebar,
            refreshFooter: refreshFooter,
            logout: logout,*/
            formValidationError: formValidationError
        };

        return service;
        /////////////////////

        function refreshHeader() {
            $rootScope.$broadcast('refresh-header');
        }

        function refreshSidebar() {
            $rootScope.$broadcast('refresh-sidebar');
        }

        function refreshFooter() {
            $rootScope.$broadcast('refresh-footer');
        }

        function logout() {
            $rootScope.$broadcast('logout');
        }

        function formValidationError() {
            $rootScope.$broadcast('form:validationError');
        }
    }

})();
