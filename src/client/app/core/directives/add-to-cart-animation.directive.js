(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('addToCartAnimation', addToCartAnimation);

  /* @ngInject */
  function addToCartAnimation(){
  	  return {
    restrict: 'A',
    link: function(scope, element, attribute) {
    	element.bind('click',function(){
    		if(parseFloat(scope.product.orderQty) > 0 ) {
                var cart = $('.shopping-cart');
                var imgtofly = element.parents('.product-items').find("img");
                if (imgtofly) {
                    var imgclone = imgtofly.clone()
                        .offset({ top:imgtofly.offset().top, left:imgtofly.offset().left })
                        .css({'opacity':'0.7', 'position':'absolute', 'height':'150px', 'width':'150px', 'z-index':'1000'})
                        .appendTo($('body'))
                        .animate({
                            'top':cart.offset().top + 10,
                            'left':cart.offset().left + 30,
                            'width':55,
                            'height':55
                        }, 1000, 'easeInOutExpo');
                    imgclone.animate({'width':0, 'height':0}, function(){ 
                      /*element.detach();*/
                       });
                }
                return false;
            }
    	});
    }
  }
  }
})();

