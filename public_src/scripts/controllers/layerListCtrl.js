import angular from 'angular';

class layerListCtrl {

  constructor($scope, $rootScope, mapService) {
    'ngInject';

    this.layers = mapService.layers;

    $scope.$createObservableFunction('selectLayer')
      .subscribe(name => {
        console.log(name);
        if (name === this.selectedLayer) {
          this.selectedLayer = undefined;
          $rootScope.$broadcast('layer:unselected', name);
        } else {
          this.selectedLayer = name;
          $rootScope.$broadcast('layer:selected', name);
        }
      });

    $scope.$createObservableFunction('toggleLayer')
      .subscribe(name => {
        mapService.toggleLayer(name);
      });

    $scope.$on('layer:unselect', () => {
      this.selectedLayer = undefined;
    });
  }

}

layerListCtrl.$inject = ['$scope', '$rootScope', 'mapService'];

angular.module('leaflet-vt-viewer').controller('layerListCtrl', layerListCtrl);

export default layerListCtrl;
