/**
 * import dependencies
 */
import angular from 'angular';
import 'angular-material';
import 'angular-route';
import 'lodash';
import 'rx-angular';

require('../../node_modules/angular-material/angular-material.css');
require('../../node_modules/leaflet/dist/leaflet.css');
require('../styles/app.less');

angular.module('leaflet-vt-viewer', [
  'ngMaterial',
  'ngRoute',
  'rx'
])
.constant('_', window._)
.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
  $routeProvider.when('/', {
    templateUrl: 'index.html',
    controller: 'appCtrl'
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);

  // set the theme of angular material
  $mdThemingProvider.theme('default')
    .warnPalette('red')
    .accentPalette('blue');
});

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./services/', true, /\.js$/));
requireAll(require.context('./controllers/', true, /\.js$/));
requireAll(require.context('./directives/', true, /\.js$/));
