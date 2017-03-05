import React, { Component } from 'react';
import logo from './logo.svg';
import FrankfurtMap from './FrankfurtMap/FrankfurtMap';
import DataSetList from './DataSetList/DataSetList';
import './App.css';

const dataSets = [{
  id: 'test',
  name: ' Test name',
  data: require('./data/test').default,
}, {
  id: 'test1',
  name: ' Test name 1',
  data: require('./data/test1').default,
}, ]


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
          data={dataSets.find(dataSet => dataSet.id === this.state.selectedDataSetId).data}
          onDistrictIdSelect={(districtId) => this.setState({selectedDistrictId: districtId})}
        />
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
