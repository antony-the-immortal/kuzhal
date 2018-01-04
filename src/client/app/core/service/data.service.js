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
        var storageRef= firebase.storage().ref();

        return {
            landingPageRef : landingPageRef,
            kuzhalInfoRef: kuzhalInfoRef,
            getLandingPageData: getLandingPageData,
            getKuzhalConstants: getKuzhalConstants,
            updateData : updateData,
            uploadImage: uploadImage
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
            landingPageRef.child("quiz").update(dataObj.quiz);
        }

        function uploadImage(file, uid, fileName) {
            var deferred = $q.defer();
            var fileRef = storageRef.child('winner');
            var uploadTask = fileRef.put(file);
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
               function(snapshot) {
                  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
                  switch (snapshot.state) {
                     case firebase.storage.TaskState.PAUSED:
                       console.log('Upload is paused');
                       break;
                     case firebase.storage.TaskState.RUNNING:
                       console.log('Upload is running');
                       break;
                  }
              },
              function(error) {
                 switch (error.code) {
                    case 'storage/unauthorized':
                        deferred.reject('User does not have permission to access the object.');
                        break;
                    case 'storage/canceled':
                        deferred.reject('User canceled the upload.');
                        break;
                    case 'storage/unknown':
                        deferred.reject(' Unknown error occurred, Please try later.');
                        break;
                  }
               }, function() {
                     deferred.resolve(uploadTask.snapshot.downloadURL);
               });
            return deferred.promise;
         }
    }

})();
