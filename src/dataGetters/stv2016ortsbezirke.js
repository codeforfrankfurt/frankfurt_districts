import rawData from '../data/stv2016ortsbezirke';
import {extractData} from './helpers';

// http://daten.frankfurt.de/dataset/kommunalwahlen-2016

export const cdu = () => {
  return {
    id: "CDU in %",
    name: "CDU voters",
    data: extractData(rawData,
      "CDU in %",
      'Ortsbezirk',
    )
  }
}

export const spd = () => {
  return {
    id: "SPD in %",
    name: "SPD voters",
    data: extractData(rawData,
      "SPD in %",
      'Ortsbezirk',
    )
  }
}

export const afd = () => {
  return {
    id: "AfD in %",
    name: "AfD voters",
    data: extractData(rawData,
      "AfD in %",
      'Ortsbezirk'
    )
  }
}
