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

export const spacePerApartment = () => {
  return extractDataHelper(
    rawData,
    'Bauen und Wohnen Wohnfläche in m² je Wohnung  2012',
    'Space per apartment'
  );
}

export const newBuildings = () => {
  return extractDataHelper(
    rawData,
    'Bauen und Wohnen Neubauquotient  2012',
    'New buildings'
  );
}

export const newBuildingsDiff = () => {
  return extractDataHelper(
    rawData,
    'Bauen und Wohnen Neubauquotient  diff',
    'New buildings diff'
  );
}
