import React from 'react';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import districtsGeoJSON from './districtsGeoJSON';
import _ from 'lodash';
//import 'leaflet/dist/leaflet.css';
//import 'leaflet/dist/leaflet.js';
const COLOR = '#661ecb';

const getInfoByDistrict = (data) => {
  const max = _.max(_.values(data).filter(d => d));
  const min = _.min(_.values(data).filter(d => d));
  console.log(min, max);
  const infoByDistrict = {};
  _.keys(data).map((districtId) => {
    const value = data[districtId]
    if (value) {
      const opacity = (value - min) / (max - min);
      infoByDistrict[districtId] = {
        name: districtId,
        value,
        fillOpacity: opacity,
        fillColor: COLOR,
      };
    } else {
      infoByDistrict[districtId] = {
        name: districtId,
        value: 'n/a',
        fillOpacity: 1,
        fillColor: '#CCC',
      };
    }
  })
  return infoByDistrict;
}
class FrankfurtMapLeaflet extends React.Component {
  render() {
    const {data} = this.props;
    const infoByDistrict = getInfoByDistrict(data);
    const position = [50.12, 8.7];
    return (
      <Map center={position} zoom={12}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          data={districtsGeoJSON}
          style={function (feature) {
              const districtId = feature.properties && feature.properties.STTLNAME;
              return infoByDistrict[districtId];
            }}
          onEachFeature={(feature, layer) => {
            const districtId = feature.properties && feature.properties.STTLNAME;
            if (infoByDistrict[districtId]) {
              layer.bindPopup(`${infoByDistrict[districtId].name}: ${infoByDistrict[districtId].value}`);
            }
          }}
        />
      </Map>
    )
  }
}
export default FrankfurtMapLeaflet;
