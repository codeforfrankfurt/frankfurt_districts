import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './map.css';

const COLOR = '#000';

class FrankfurtMap extends Component {
  colorDistricts = () => {

    const {
      data,
      } =this.props;
    const max = _.max(_.values(data));
    const min = _.min(_.values(data));
    console.log(min, max);
    $('#map .district').map((i, el) => {
      const value = data[el.id]
      const opacity = (value - min) / max;
      el.style.opacity = opacity;
      el.setAttribute('fill', COLOR);
      console.log(el.id);
      console.log(value);
      console.log(opacity);
    })

  }

  componentDidMount() {
    const {
      onDistrictIdSelect,
      } =this.props;


    $('#map .district').map((i, el) => {
      el.onclick = () => onDistrictIdSelect(el.id);
    })
    this.colorDistricts();
    //document.getElementsByClassName("district").map(el => {
    //  console.log(2)
    //
    //})
  }

  componentWillReceiveProps() {
    this.colorDistricts()
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default FrankfurtMap;