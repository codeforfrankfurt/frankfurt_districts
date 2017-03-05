import React, { Component } from 'react';
import logo from './logo.svg';
import FrankfurtMap from './FrankfurtMap/FrankfurtMap';
import './App.css';

const data = {
  test: require('./data/test').default,
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      selectedDataId: 'test',
      selectedDistrictId: null,
    }
  }
  render() {
    return (
      <FrankfurtMap
        data={data[this.state.selectedDataId]}
        onDistrictIdSelect={(districtId) => this.setState({selectedDistrictId: districtId})}
      />
    );
  }
}

export default App;
