import 'leaflet';
import 'topojson';
import angular from 'angular';

require('../../../node_modules/leaflet.vectorgrid/dist/Leaflet.VectorGrid.js');

class mapService {

  constructor() {
    'ngInject';

    this.layers = [];
  }

  initialize() {
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 3
    });

    const basemap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      subdomains: 'abcd'
    });

    this.map.addLayer(basemap);
  }

  addLayer(name, url, renderMethod) {
    const vtLayer = L.vectorGrid.protobuf(url, {
      rendererFactory: L[renderMethod].tile
    });

    this.map.addLayer(vtLayer);
    this.layers.push({
      name: name,
      url: url,
      renderMethod: renderMethod,
      visible: true,
      layer: vtLayer
    });
  }

  removeLayer(name) {
    var index = _.findIndex(this.layers, { name: name });

    if (index) {
      this.map.removeLayer(this.layers[index].layer);
      this.layers.splice(index, 1);
    }
  }

  toggleLayer(name) {
    var item = _.find(this.layers, { name: name });

    if (item) {
      if (item.visible) {
        this.map.removeLayer(item.layer);
      } else {
        this.map.addLayer(item.layer);
      }
    }
  }
}

mapService.$inject = [];

angular.module('leaflet-vt-viewer').service('mapService', mapService);

export default mapService;
