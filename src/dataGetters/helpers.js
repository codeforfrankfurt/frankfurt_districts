export const extractDataHelper = (rawData, id, name) => {
  const data = {};
  rawData.map(district => {
    data[district.Stadtteil] = district[id]
  })
  return {
    id,
    name,
    data,
  };
}
