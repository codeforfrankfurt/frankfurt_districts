import rawData from '../data/stadtteilprofile-bauen-wohnen';
import {extractDataHelper} from './helpers';

export const populationDensity = () => {
  return extractDataHelper(
    rawData,
    "Bauen und Wohnen Einwohnerdichte je ha  2012",
    'Population density'
  );
}

export const populationDensityDiff = () => {
  return extractDataHelper(
    rawData,
    'Bauen und Wohnen Einwohnerdichte je ha  diff',
    'Population density diff'
  );
}