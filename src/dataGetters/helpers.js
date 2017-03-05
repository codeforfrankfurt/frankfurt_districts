export const extractDataHelper = (rawData, id, name) => {
  const data = {};
  rawData.map(district => {
    data[district.Stadtteil] = parseFloat(district[id].replace(',', '.'))
  })
  return {
    id,
    name,
    data,
  };
}

export const extractData = (rawData, id, districtKey = 'Stadtteil') => {
  const data = {};
  rawData.map(district => {
    data[district[districtKey].trim()] = parseFloat(district[id].replace(',', '.'))
  })
  return data
}
