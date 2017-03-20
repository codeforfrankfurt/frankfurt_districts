import React from 'react';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import districtsGeoJSON from './districtsGeoJSON';
//import 'leaflet/dist/leaflet.css';
//import 'leaflet/dist/leaflet.js';

class FrankfurtMapLeaflet extends React.Component {
  render() {
    const position = [50.12, 8.7];
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          data={districtsGeoJSON}
          options={{
            style: function (feature) {
              return feature.properties && feature.properties.style;
            },
          }}
        />
      </Map>
    )
  }
}
export default FrankfurtMapLeaflet;
