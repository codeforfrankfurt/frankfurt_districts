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
