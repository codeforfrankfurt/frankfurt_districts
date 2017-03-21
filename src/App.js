import React, { Component } from 'react';
import logo from './logo.svg';
import FrankfurtMap from './FrankfurtMap/FrankfurtMap';
import FrankfurtMapLeaflet from './FrankfurtMapLeaflet/FrankfurtMapLeaflet';
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
  nationalitiesCount,
} from './dataGetters/bevolkerungsstruktur';
import populationDataSets from './dataGetters/bevolkerungsstruktur';
import getPoliticsDataSets from './dataGetters/stv2016stadtteile';
import districtsInfo from './data/districtsInfo';

const dataSetGroups = [{
  name: 'General',
  dataSets: [
    populationDensity(),
    spacePerApartment(),
    newBuildings(),
    nationalitiesCount(),
  ],
}, {
  name: 'People',
  dataSets: populationDataSets(),
}, {
  name: 'Politics',
  dataSets: getPoliticsDataSets(),
}];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedDataSetId: 'Bauen und Wohnen Einwohnerdichte je ha  2012',
      selectedDistrictId: null,
    }
  }


  render() {
    const dataSets = _.flatten(dataSetGroups.map(dataSetGroup => dataSetGroup.dataSets));
    const selectedDataSet = _.find(dataSets, dataSet => dataSet.id === this.state.selectedDataSetId) || {};
    //<FrankfurtMap
    //  data={selectedDataSet.data}
    //  onDistrictIdSelect={(districtId) => this.setState({selectedDistrictId: districtId})}
    ///>
    return (
      <div>
        <FrankfurtMapLeaflet
          data={selectedDataSet.data}
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
          dataSetGroups={dataSetGroups}
        />
      </div>
    );
  }
}

export default App;
