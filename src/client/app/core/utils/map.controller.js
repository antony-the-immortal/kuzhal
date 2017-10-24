(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('MapController', MapController);

  MapController.$inject = ['logger'];
  /* @ngInject */
  function MapController(logger) {
    var vm = this;
    vm.title = 'Map';

    activate();

    function activate() {
      logger.info('Activated Map View');
      vm.mapOptions = {
      center: new google.maps.LatLng(35.784, -78.670),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    }
  }
})();
