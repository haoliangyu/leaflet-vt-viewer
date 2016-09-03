import angular from 'angular';

class layerInfoCtrl {

  constructor($scope, $rootScope, mapService) {
    'ngInject';

    this.showStyleEditor = false;
    this.styleEditorOptions = { mode: 'code' };

    this.renderMethod = 'svg';
    this.$rootScope = $rootScope;

    $scope.$createObservableFunction('reset')
      .subscribe(() => {
        this.reset();
      });

    $scope.$createObservableFunction('addLayer')
      .subscribe(() => {
        if (this.name && this.url) {
          mapService.addLayer(this.name, this.url, this.renderMethod, this.style);
          this.reset();
        }
      });

    $scope.$createObservableFunction('removeLayer')
      .subscribe(() => {
        if (this.name) {
          mapService.removeLayer(this.name);
          this.reset();
        }
      });

    $scope.$on('layer:selected', (event, name) => {
      const layer = _.find(mapService.layers, { name: name });

      this.name = layer.name;
      this.url = layer.url;
      this.renderMethod = layer.renderMethod;
      this.style = layer.style;
    });

    $scope.$on('layer:unselected', () => {
      this.reset();
    });
  }

  reset() {
    this.name = '';
    this.url = '';
    this.renderMethod = 'svg';
    this.style = undefined;

    this.$rootScope.$broadcast('layer:unselect');
  }

}

layerInfoCtrl.$inject = ['$scope', '$rootScope', 'mapService'];

angular.module('leaflet-vt-viewer').controller('layerInfoCtrl', layerInfoCtrl);

export default layerInfoCtrl;
