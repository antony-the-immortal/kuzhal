(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('DeviceUtils', DeviceUtils);

    DeviceUtils.$inject = ['$window', 'logger','session'];

    /* @ngInject */
    function DeviceUtils($window, logger,session) {

        var service = {
            isSmallScreen: isSmallScreen,
            isMobileDevice: isMobileDevice,
            isCameraAvailable: isCameraAvailable,
            getMachineAttributes: getMachineAttributes,
            parseUserAgentString: parseUserAgentString,
            resizeImage: resizeImage,
            isIOS: isIOS
        };

        return service;
        /////////////////////

        function isIOS() {
            return  /iPhone/i.test(navigator.userAgent) || 
                    /iPad/i.test(navigator.userAgent);
        }

        function isSmallScreen() {
            return window.matchMedia('(max-width: 767px)').matches;
        }

        function isCameraAvailable() {
            return /Android/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || 
                    /iPad/i.test(navigator.userAgent) || /Windows Phone/i.test(navigator.userAgent) ||
                    /CriOS/.test(navigator.userAgent);
        }

        function isMobileDevice() {
            return /Android/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || 
                    /Windows Phone/i.test(navigator.userAgent);
        }

        function getMachineAttributes() {
            var colorDepth = window.screen.colorDepth,
                width = window.screen.width,
                height = window.screen.height,
                availWidth = window.screen.availWidth,
                availHeight = window.screen.availHeight,
                platform = navigator.platform,
                userAgent = navigator.userAgent,
                clientParams,
                javaSupported = 'No';

            if (navigator.javaEnabled() === 1) {
                javaSupported = 'Yes';
            }

            clientParams = 'colorDepth=' + colorDepth +
                '|width=' + width +
                '|height=' + height +
                '|availWidth=' + availWidth +
                '|availHeight=' + availHeight +
                '|platform=' + platform +
                '|javaEnabled=' + javaSupported +
                '|userAgent=' + parseUserAgentString(userAgent);

            return clientParams;
        }

        function parseUserAgentString() {
            var returnVal = navigator.userAgent;
            if (returnVal.search('Firefox') > -1) {
                var revPos = returnVal.search('rv:');
                if (revPos > -1) {
                    returnVal = returnVal.substring(0, revPos + 6);
                }
            }
            return returnVal;
        }

        function resizeImage(file, maxHeight, maxWidth, quality, callback) {
             var img = window.document.createElement('img');
             img.onload = function() {
                var start = (new Date()).getTime();
                var canvas = window.document.createElement('canvas');
                var width = img.width;
                var height = img.height;
                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                var dataURL = canvas.toDataURL('image/jpeg', quality);
                console.log('Canvas Encoding Time: ' + ((new Date()).getTime() - start) + 'ms');
                callback(dataURL);
            };
            img.src = window.URL.createObjectURL(file);
        }

    }

})();
