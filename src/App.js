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
} from './dataGetters/stadtteilprofile-bauen-wohnen';

const dataSets = [{
  id: 'test',
  name: ' Test name',
  data: require('./data/test').default,
}, {
  id: 'test1',
  name: ' Test name 1',
  data: require('./data/test1').default,
},
  populationDensity(),
  populationDensityDiff(),
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedDataSetId: 'test',
      selectedDistrictId: null,
    }
  }

  render() {
    return (
      <div>
        <FrankfurtMap
          data={_.find(dataSets, dataSet => dataSet.id === this.state.selectedDataSetId).data}
          onDistrictIdSelect={(districtId) => this.setState({selectedDistrictId: districtId})}
        />
        <DataSetList
          selectedDataSetId={this.state.selectedDataSetId}
          onSelectedDataSetIdSelect={dataSetId => this.setState({selectedDataSetId: dataSetId})}
          dataSets={dataSets}
        />
        {this.state.selectedDistrictId && (
          <DistrictInfo
            districtId={this.state.selectedDistrictId}
          />
        )}
      </div>
    );
  }
}

export default App;
