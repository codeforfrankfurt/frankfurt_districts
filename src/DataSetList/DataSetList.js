import React from 'react';

const DataSetList = ({
  selectedDataSetId,
  onSelectedDataSetIdSelect,
  dataSetGroups = [],
  }) => {
  return (

    <ul className="chooses">
      {dataSetGroups.map(dataSetGroup => (
        <div>
          <h3>{dataSetGroup.name}</h3>
          {dataSetGroup.dataSets.map(dataSet => (
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
        </div>
      ))}
    </ul>
  )
};

export default DataSetList;
