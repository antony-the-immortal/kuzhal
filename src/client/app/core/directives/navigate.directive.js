(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('navigate', navigate);

  navigate.$inject = ['config'];
  /* @ngInject */
  function navigate(config) {
    //Usage:
    //<img ht-img-person="{{person.imageSource}}"/>
    var basePath = config.imageBasePath;
    var unknownImage = config.unknownPersonImageSource;
    var directive = {
      link: link,
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {
      element.find('li').click(function (argument) {
        alert("hi");
        /*$scope.app.products= $scope.products;
        $scope.app.inCart= $scope.inCart;
        session.set(constants.APP ,JSON.stringify($scope.app));*/
      })
    }
  }
})();
