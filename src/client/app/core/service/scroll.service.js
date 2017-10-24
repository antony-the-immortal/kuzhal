(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('ScrollService', ScrollService);

    ScrollService.$inject = ['$window', 'logger'];
    /* @ngInject */
    function ScrollService($window, logger) {
        var ANIMATE_DURATION = 500;
        var SCROLL_TO_PADDING = 30;
        var body = angular.element('body');
        var isScrolling = false;
        var todoAfterScroll = [];

        function beginScrolling() {
            isScrolling = true;
        }

        function endScrolling() {
            isScrolling = false;
            for (var i=0; i<todoAfterScroll.length; i++) {
                todoAfterScroll.pop()();
            }
        }

        return {
            scrollToTop: function() {
                beginScrolling();
                $window.$('html, body').animate({ scrollTop: 0 }, ANIMATE_DURATION, function() {
                    endScrolling();
                });
            },
            scrollToBottom: function() {
                beginScrolling();
                $window.$('html, body').animate({ scrollTop: 9999999 }, ANIMATE_DURATION, function() {
                    endScrolling();
                });
            },
            scrollTo: function(to) {
                if (typeof to === 'string') {
                    to = angular.element(to);
                }
                if (to && to.length) {
                    beginScrolling();
                    $window.$('html, body').animate({
                        scrollTop: to.offset().top - SCROLL_TO_PADDING
                    }, ANIMATE_DURATION, function() {
                        endScrolling();
                    });
                }
            },
            executeAfterScroll: function(doThis) {
                if (!isScrolling) {
                    doThis();
                } else {
                    todoAfterScroll.push(doThis);
                }
            }
        };
    }

})();
