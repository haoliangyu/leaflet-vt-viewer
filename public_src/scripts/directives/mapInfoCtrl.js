import angular from 'angular';

class mapInfoView {
  constructor() {
    this.restrict = 'E';
    this.template = require('../../views/components/map-info-view.html');
    this.controller = 'mapInfoCtrl';
    this.controllerAs = 'mapInfo';
    this.scope = {};
  }
}

angular.module('leaflet-vt-viewer').directive('mapInfoView', () => new mapInfoView());

export default mapInfoView;
