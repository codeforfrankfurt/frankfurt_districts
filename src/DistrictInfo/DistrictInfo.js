import React from 'react';
import _ from 'lodash';

const DistrictInfo = ({
  districtId,
  districtInfo = {},
  dataSetName,
  dataSetValue,
  }) => {
  return (
    <div className="info">
      <div className="districtname">{districtId}</div>
      <div className="text">
        <p>
          <strong>{dataSetName}</strong>: {dataSetValue ? dataSetValue : 'no data'} <br />
          <br />
          {_.get(districtInfo, 'description')}
          <br />
          <br />
          {districtInfo.rentUrl && (
            <a target="_blank" href={districtInfo.rentUrl}>Search flats in {districtId}</a>
          )}</p>
      </div>
    </div>
  )
};

export default DistrictInfo;