import React from 'react';

const DataSetList = ({
  selectedDataSetId,
  onSelectedDataSetIdSelect,
  dataSets = [],
  }) => {
  return (

    <ul className="chooses">
      {dataSets.map(dataSet => (
        <li key={dataSet.id}>
          <a
            href="javascript:;"
            onClick={() => onSelectedDataSetIdSelect(dataSet.id)}
            className={selectedDataSetId === dataSet.id && 'active'}
          >
            {dataSet.name}
          </a>
        </li>
      ))}
    </ul>
  )
};

export default DataSetList;