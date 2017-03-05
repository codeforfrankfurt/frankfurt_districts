import rawData from '../data/stv2016stadtteile';
import {extractDataHelper} from './helpers';

// http://daten.frankfurt.de/dataset/kommunalwahlen-2016
// Stadtverordnetenwahl 2016 Stadtteile JSON

export const cdu = () => {
  return extractDataHelper(
    rawData,
    "CDU in %",
    'CDU voters'
  );
}
export const spd = () => {
  return extractDataHelper(
    rawData,
    "SPD in %",
    'SPD voters'
  );
}

export const afd = () => {
  return extractDataHelper(
    rawData,
    "AfD in %",
    'AfD voters'
  );
}