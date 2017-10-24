// factory
angular
    .module('app.widgets')
    .factory('spinner', spinner);

spinner.$inject = ['$rootScope', '$mdDialog',  '$state'];
/* @ngInject */
function spinner($rootScope, $mdDialog,  $state) {

    return {
        show :show,
        hide : hide
    };

    function show () {
        angular.element('body').addClass('lightOverlay');
        $rootScope.$emit('spinnerShow');
        $mdDialog.show({
            templateUrl: 'app/widgets/spinner/spinner.html',
            clickOutsideToClose: false,
            escapeToClose: false,
        }).finally(function() {
            angular.element('body').removeClass('lightOverlay');
        });
    }
    function hide(){
        $mdDialog.hide();
    }

}
