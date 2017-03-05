import React, { Component } from 'react';
import logo from './logo.svg';
import FrankfurtMap from './FrankfurtMap/FrankfurtMap';
import DataSetList from './DataSetList/DataSetList';
import DistrictInfo from './DistrictInfo/DistrictInfo';
import './App.css';
import _ from 'lodash';
import {
  populationDensity,
  populationDensityDiff,
  spacePerApartment,
  newBuildings,
  newBuildingsDiff,
} from './dataGetters/stadtteilprofile-bauen-wohnen';
import {
  foreigners,
  averageAge,
  women,
  nationalitiesCount,
} from './dataGetters/bevolkerungsstruktur';
import {
  cdu,
  spd,
  afd,
} from './dataGetters/stv2016ortsbezirke';
import districtsInfo from './data/districtsInfo';

const dataSets = [
  populationDensity(),
  //populationDensityDiff(),
  spacePerApartment(),
  newBuildings(),
  //newBuildingsDiff(),
  foreigners(),
  averageAge(),
  women(),
  nationalitiesCount(),
  cdu(),
  spd(),
  afd(),
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedDataSetId: 'Bauen und Wohnen Einwohnerdichte je ha  2012',
      selectedDistrictId: null,
    }
  }


  render() {
    const selectedDataSet = _.find(dataSets, dataSet => dataSet.id === this.state.selectedDataSetId) || {};

    return (
      <div>
        <FrankfurtMap
          data={selectedDataSet.data}
          onDistrictIdSelect={(districtId) => this.setState({selectedDistrictId: districtId})}
        />
        {this.state.selectedDistrictId && (
          <DistrictInfo
            districtId={this.state.selectedDistrictId}
            districtInfo={districtsInfo[this.state.selectedDistrictId]}
            dataSetName={selectedDataSet.name}
            dataSetValue={selectedDataSet.data[this.state.selectedDistrictId]}
          />
        )}
        <DataSetList
          selectedDataSetId={this.state.selectedDataSetId}
          onSelectedDataSetIdSelect={dataSetId => this.setState({selectedDataSetId: dataSetId})}
          dataSets={dataSets}
        />
      </div>
    );
  }
}

export default App;
