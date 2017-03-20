import rawData from '../data/stv2016stadtteile';
import {extractDataHelper} from './helpers';

// http://daten.frankfurt.de/dataset/kommunalwahlen-2016
// Stadtverordnetenwahl 2016 Stadtteile JSON

/**
 * get data for all parties
 * @returns {Array}
 */
export default function getPoliticsDataSets() {
  const parties = [
    ['CDU in %', ''],
    ['SPD in %', ''],
    ['GRÜNE in %', ''],
    ['DIE LINKE in %', ''],
    ['FDP in %', ''],
    ['BFF in %', ''],
    ['PIRATEN in %', ''],
    ['ÖkoLinX-ARL in %', ''],
    ['ELF in %', ''],
    ['REP in %', ''],
    ['Graue Panther in %', ''],
    ['ALFA in %', ''],
    ['IBF in %', ''],
    ['Liberale in %', ''],
    ['P.O.P. in %', ''],
    ['FREIE WÄHLER in %', ''],
    ['AfD in %', ''],
    ['NPD in %', ''],
    ['DIE PARTEI in %', ''],
    ['dFfm in %', ''],
  ];
  return parties.map(party =>  extractDataHelper(
    rawData,
    party[0],
    party[0]
  ));
}