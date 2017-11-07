(function() {
    'use strict';

    /**
     * @name capitalizeFirstLetter
     * @desc This directive uppercases the first letter of the string passed in.
     */
    angular.module('app.core')
        .directive('owlCarouselWrapper', function() {
            return {
                restrict: 'E',
                link: function(scope, element, attrs) {
                    var options = {
                        autoplay: 700,
                        loop:true,
                        stopOnHover: true,
                        autoplaySpeed: 700,
                        paginationSpeed: 1000,
                        singleItem: true,
                        items : 1
                    };
                    $(element).owlCarousel(options);

                }
            }
        });
})();
