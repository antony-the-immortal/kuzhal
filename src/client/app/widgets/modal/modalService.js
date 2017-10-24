// factory
angular
    .module('app.widgets')
    .factory('modalService', modalService);

modalService.$inject = ['$rootScope', '$mdDialog', 'logger', 'session', 'dataservice','constants','$state'];
/* @ngInject */
function modalService($rootScope, $mdDialog, logger, session, dataservice, constants,$state) {

    return {
        showModal: showModal
    };

    function showModal(templateUrl, templateName, app) {
        angular.element('body').addClass('lightOverlay');
        $rootScope.$emit('modalOpen', templateName);
        $mdDialog.show({
            templateUrl: templateUrl,
            clickOutsideToClose: false,
            escapeToClose: false,
            controller: ['$scope', function($scope) {
                $scope.close = function() {
                    $rootScope.$emit('modalClosed', templateName);
                    $mdDialog.hide();
                    angular.element('body').removeAttr('style');
                };
                $scope.submit = function(form) {
                    form.$submitted = true;
                    if (form.$valid) {
                            $rootScope.$emit('modalClosed', templateName);
                            $mdDialog.hide();
                    }
                };
                $scope.login= function() {
                  $scope.close();
                  $state.go('login');
                }
            }],
            bindToController: true
        }).finally(function() {
            angular.element('body').removeClass('lightOverlay');
        });
    }

}
