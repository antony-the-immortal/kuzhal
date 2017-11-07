// factory
angular
.module('app.widgets')
.factory('modalService', modalService);

modalService.$inject = ['$rootScope', '$uibModal', 'logger', 'session', 'dataservice','constants','$state'];
/* @ngInject */
function modalService($rootScope, $uibModal, logger, session, dataservice, constants,$state) {

return {
    showModal: showModal
};

function showModal(templateUrl, templateName, data) {
    angular.element('body').addClass('lightOverlay');
    $rootScope.$emit('modalOpen', templateName);
    $uibModal.open({
        templateUrl: templateUrl, // loads the template
        backdrop: true, // setting backdrop allows us to close the modal window on clicking outside the modal window
        windowClass: templateName, // windowClass - additional CSS class(es) to be added to a modal window template
        controller: function ($scope, $uibModalInstance, $log, user) {
            $scope.data = user;
            $scope.showTutorial = true;
            $scope.submit = function () {
                $uibModalInstance.dismiss('cancel'); // dismiss(reason) - a method that can be used to dismiss a modal, passing a reason
            }
            $scope.close = function () {
                $uibModalInstance.dismiss('cancel'); 
            };
        },
        resolve: {
            user: function () {
                return data;
            }
        }
    });//end of modal.open
}

}
