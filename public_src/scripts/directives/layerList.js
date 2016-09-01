import angular from 'angular';

class layerListView {
  constructor() {
    this.restrict = 'E';
    this.template = require('../../views/components/layer-list-view.html');
    this.controller = 'layerListCtrl';
    this.controllerAs = 'layerList';
    this.scope = {};
  }
}

angular.module('leaflet-vt-viewer').directive('layerListView', () => new layerListView());

export default layerListView;
