(function(){
    'use strict';

    var MASK_CHAR = "*";
    var DEFAULT_REVEAL = 4;

    angular.module('app.core')
        .filter('accountNumberMask', function() {
            return function (accountNumber, revealCount) {
                var reveal = DEFAULT_REVEAL;
                if (revealCount != undefined) {
                    reveal = revealCount;
                }
                if (accountNumber && accountNumber.length > reveal) {
                    return accountNumber.substring(0, accountNumber.length - reveal).replace(/./g, MASK_CHAR) +
                            accountNumber.substring(accountNumber.length - reveal);
                } else {
                    return accountNumber;
                }
            };
        });
})();
