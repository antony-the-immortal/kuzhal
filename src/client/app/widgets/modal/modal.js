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
            
            $firebaseObject(dataservice.landingPageRef).$loaded().then(function(data) {
                $scope.landingPageContent = data;
              });
              $firebaseObject(dataservice.kuzhalInfoRef).$loaded().then(function(data) {
                $scope.kuzhalConstants = data;
              });
            $scope.oldPassword = null;
            $scope.newPassword = null;
            $scope.confirmPassword = null;
            $scope.submit = function () {
                $uibModalInstance.dismiss('cancel'); // dismiss(reason) - a method that can be used to dismiss a modal, passing a reason
            }
            $scope.close = function () {
                $uibModalInstance.dismiss('cancel'); 
            };
             $scope.validateAdmin = function (form) {
                if($scope.username.toLowerCase() === $scope.landingPageContent.admin["password"]) {
                    $uibModalInstance.dismiss('cancel'); 
                    showModal('app/layout/modal/edit-details.html', 'edit-modal', $scope)
                } else {
                    //$scope.errorMsg ="Invalid password";
                    form.$setValidity('notValid', true);
                    form.username.$setValidity('notValid', true);
                }
            } 
            $scope.save = function() {
                $scope.submitted = true;
                dataservice.updateData($scope.landingPageContent);
            }

            $scope.passwordChange = function(form) {
                if($scope.oldPassword === $scope.landingPageContent.admin["password"] && ($scope.newPassword === $scope.confirmPassword)){
                    $scope.landingPageContent.admin.password = $scope.newPassword;
                    dataservice.updateData($scope.landingPageContent);
                    $scope.setPassword = false;
                }
            }
            
            $scope.uploadImage = function(){
                var file = angular.element("#uploadFile")[0];
                dataservice.uploadImage(file.files[0]).then(function(response){
                    $scope.landingPageContent.quiz.winnerDetails.imgURL = response;
                });
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
