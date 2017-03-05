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
      <p>
        {dataSetName}: {dataSetValue ? dataSetValue : 'no data'}
        <br />
        {_.get(districtInfo, 'description')}
        <br/>
        <br/>
        {districtInfo.rentUrl && (
          <a target="_blank" href={districtInfo.rentUrl}>Look for a flat in {districtId}</a>
        )}</p>
    </div>
  )
};

export default DistrictInfo;