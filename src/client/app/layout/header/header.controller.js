(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['logger','$state','$scope','$rootScope','kuzhalConstants', 'dataservice' ,'session', 'cookie', 'constants'];
  /* @ngInject */
  function HeaderController(logger,$state,$scope, $rootScope ,kuzhalConstants, dataservice, session, cookie, constants) {
    var vm = this;
    vm.title = 'Header';

    activate();

    function activate() {
      logger.info('Activated Header View');
      vm.kuzhalConstants = kuzhalConstants;
      vm.myCart = JSON.parse(session.get(constants.VIEW_CART_ITEMS)) || [];
      vm.currentState = $state.current.name;
      vm.userName = cookie.getObject(constants.USER_DETAILS) || null ;
    }
    vm.viewCart = function(){
      if (vm.myCart.length > 0) {
        session.set(constants.VIEW_CART_ITEMS, JSON.stringify(vm.myCart));
        $state.go('viewcart');
      }
    }
    vm.toggle =function () {
      $('#sidebar-wrapper').toggleClass('toggled');
    }
    $scope.$on('hideNavigation',function(event,argument) {
      $('#sidebar-wrapper').removeClass('toggled');
    });
    $rootScope.$on('itemsAddedToCart',function(event,argument) {
      vm.myCart = argument;
    });
    $scope.$on('items-added-to-cart',function(event,args){
        console.log(args);
    });
    $rootScope.$on('userLoggedIn', function(){
      vm.isLoggedIn = session.get(constants.USER_LOGGED_IN_STATUS);
      vm.userName = cookie.getObject(constants.USER_DETAILS) ;
    })

  }
})();

$("nav > ul > li > a").on("click", function() {
  $("nav > ul > li").removeClass('active');
  $(this).parent('li').addClass('active');
  var destination = $(this).attr('href');
  $('html, body').animate({scrollTop: destination.offset().top}, 'slow');
});

$(window).scroll(function(){
  if ($(window).scrollTop() >= 50) {
     $('nav').addClass('fixed-header');
  }
  else {
     $('nav').removeClass('fixed-header');
  }
});