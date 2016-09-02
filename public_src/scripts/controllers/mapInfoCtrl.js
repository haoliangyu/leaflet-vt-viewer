import angular from 'angular';

class mapInfoCtrl {

  constructor($scope, $timeout, mapService) {
    'ngInject';

    this.center = mapService.map.getCenter();
    this.zoom = mapService.map.getZoom();
    this.mapService = mapService;
    this.$timeout = $timeout;

    mapService.map.on('move', this.updateCenter, this);
    mapService.map.on('zoomend', this.updateZoom, this);
  }

  updateCenter() {
    this.$timeout(() => {
      this.center = this.mapService.map.getCenter();
    });
  }

  updateZoom() {
    this.$timeout(() => {
      this.zoom = this.mapService.map.getZoom();
    });
  }
}

mapInfoCtrl.$inject = ['$scope', '$timeout', 'mapService'];

angular.module('leaflet-vt-viewer').controller('mapInfoCtrl', mapInfoCtrl);

export default mapInfoCtrl;
