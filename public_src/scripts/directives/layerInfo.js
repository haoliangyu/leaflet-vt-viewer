import angular from 'angular';

class layerInfoView {
  constructor() {
    this.restrict = 'E';
    this.template = require('../../views/components/layer-info-view.html');
    this.controller = 'layerInfoCtrl';
    this.controllerAs = 'layerInfo';
    this.scope = {};
  }
}

angular.module('leaflet-vt-viewer').directive('layerInfoView', () => new layerInfoView());

export default layerInfoView;
