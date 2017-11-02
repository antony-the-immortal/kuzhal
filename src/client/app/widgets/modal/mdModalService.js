// factory
angular
    .module('app.widgets')
    .factory('mdModalService', mdModalService);

    mdModalService.$inject = ['$rootScope', '$mdDialog', 'logger', 'session', 'dataservice','constants','$state'];
/* @ngInject */
function mdModalService($rootScope, $mdDialog, logger, session, dataservice, constants,$state) {

    return {
        showModal: showModal
    };

    function showModal(templateUrl, templateName, data) {
        angular.element('body').addClass('lightOverlay');
        $rootScope.$emit('modalOpen', templateName);
        $mdDialog.show({
            templateUrl: templateUrl,
            clickOutsideToClose: false,
            escapeToClose: false,
            controller: ['$scope', function($scope) {
                $scope.data = data;
                $scope.close = function() {
                    $rootScope.$emit('modalClosed', templateName);
                    angular.element('body').removeAttr('style');
                    $mdDialog.hide();
                };
                $scope.submit = function(form) {
                    form.$submitted = true;
                    if (form.$valid) {
                            $rootScope.$emit('modalClosed', templateName);
                            $mdDialog.hide();
                    }
                };
            }],
            bindToController: true
        }).finally(function() {
            angular.element('body').removeClass('lightOverlay');
        });
    }

}
