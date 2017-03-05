import rawData from '../data/stadtteilprofile-bauen-wohnen';
import {extractDataHelper} from './helpers';

export const populationDensity = () => {
  const data = {};
  rawData.map(district => {
    data[district.Stadtteil] = district["Bauen und Wohnen Einwohnerdichte je ha  2012"]
  })
  return {
    id: 'Bauen und Wohnen Einwohnerdichte je ha  2012',
    name: 'Population density',
    data,
  };
}

export const populationDensityDiff = () => {
  return extractDataHelper(
    rawData,
    'Bauen und Wohnen Einwohnerdichte je ha  diff',
    'Population density diff'
  );
}