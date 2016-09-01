import angular from 'angular';

class mapCtrl {

  constructor($scope, mapService) {
    'ngInject';

    mapService.initialize();
  }
}

mapCtrl.$inject = ['$scope', 'mapService'];

angular.module('leaflet-vt-viewer').controller('mapCtrl', mapCtrl);

export default mapCtrl;
