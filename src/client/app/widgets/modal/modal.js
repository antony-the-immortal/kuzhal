// factory
angular
.module('app.widgets')
.factory('modalService', modalService);

modalService.$inject = ['$rootScope', '$uibModal','$firebaseObject', 'logger', 'session', 'dataservice','constants','$state'];
/* @ngInject */
function modalService($rootScope, $uibModal, $firebaseObject,  logger, session, dataservice, constants,$state) {

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
            var syncLandingPageObject =  $firebaseObject(dataservice.landingPageData);
            syncLandingPageObject.$bindTo($scope, "landingPageContent");
            var syncKuzhalInfoPageObject = $firebaseObject(dataservice.kuzhalInfo);
            syncKuzhalInfoPageObject.$bindTo($scope, "kuzhalInfo");

            $scope.submit = function () {
                $uibModalInstance.dismiss('cancel'); // dismiss(reason) - a method that can be used to dismiss a modal, passing a reason
            }
            $scope.close = function () {
                $uibModalInstance.dismiss('cancel'); 
            };
             $scope.validateAdmin = function () {
                if($scope.secretCode.toLowerCase() === "admin") {
                    $uibModalInstance.dismiss('cancel'); 
                    showModal('app/layout/modal/edit-details.html', 'edit-modal', $scope)
                }
            } 
            $scope.save = function() {
                $scope.submitted = true;
            }
        },
        resolve: {
            user: function () {
                return data;
            }
        }
    });//end of modal.open
}

}
