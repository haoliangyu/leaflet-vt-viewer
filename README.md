# leaflet-vt-viewer

Vector tile viewer and tester based on [Leaflet](http://leafletjs.com/) and [Leaflet.VectorGrid](https://github.com/IvanSanchez/Leaflet.VectorGrid).

![preview](https://raw.githubusercontent.com/haoliangyu/leaflet-vt-viewer/master/preview.png)

## Develop and Use Locally

This project is built with [webpack](https://webpack.github.io/).

* Run `npm install` to install dependencies
* Run `webpack` to build the app in `public` folder. `webpack.config.prod.js` is available for optimized development version.
* Or run `webpack-dev-server` to set up test server directly at `localhost:8080` (require [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html))

## What's next?

* [ ] import layer list from a JSON file
* [x] add style to vector tile layers
* [ ] update layer style on-the-fly
