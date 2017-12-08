(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', '$firebaseArray', 'exception', 'logger', 'constants','cookie'];
    /* @ngInject */
    function dataservice($http, $q, $firebaseArray, exception, logger, constants, cookie) {
        var deferred = $q.defer();
        var rootRef = firebase.database();
        var landingPageRef = rootRef.ref('/landingPageData');
        var kuzhalInfoRef = rootRef.ref('/kuzhalInfo');

        return {
            landingPageRef : landingPageRef,
            kuzhalInfoRef: kuzhalInfoRef,
            getLandingPageData: getLandingPageData,
            getKuzhalConstants: getKuzhalConstants,
            updateData : updateData
        }
        function getLandingPageData() {
            return landingPageRef.on("value", function (data) {
                cookie.setObject("LANDING_INFO", data.val());
                deferred.resolve(data.val());
                return deferred.promise;
            });
        }
        function getKuzhalConstants() {
            return kuzhalInfoRef.on("value", function (data) {
                cookie.setObject("KUZHAL_INFO", data.val());
                deferred.resolve(data.val());
                return deferred.promise;
            });
        }

        function updateData(dataObj) {
            landingPageRef.child("marquee").update(dataObj.marquee);
            landingPageRef.child("guruSpeech").update(dataObj.guruSpeech);
            landingPageRef.child("admin").update(dataObj.admin);
        }
    }

})();
