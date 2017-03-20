import rawData from '../data/bevolkerungsstruktur';
import {extractDataHelper} from './helpers';

// http://daten.frankfurt.de/dataset/bevoelkerung

export const nationalitiesCount = () => {
  return extractDataHelper(
    rawData,
    "Bevölkerungsstruktur Zahl der Staatsangehörigkeiten  2012",
    'Amount of different nationalities'
  );
}

export default function populationDataSets () {
  const parties = [
    ['Bevölkerungsstruktur Einwohnerinnen und Einwohner  2012', 'Total amount of inhabitants', 'people'],
    ['Bevölkerungsstruktur Frauen in %  2012', 'Percentage of women', '%'],
    ['Bevölkerungsstruktur Einwohnerentwicklung (10-Jahres-Vergeich)  2012', 'Population development', '%'],
    ['Bevölkerungsstruktur Deutsche ohne Migrationshintergrund  2012', 'Germans without migration background', 'people'],
    ['Bevölkerungsstruktur Ausländerinnen und Ausländer in %  2012', 'Foreigners', '%'],
    ['Bevölkerungsstruktur Durchschnittsalter  2012', 'Average age', 'years'],
  ];
  return parties.map(party => extractDataHelper(
    rawData,
    party[0],
    party[1] || party[0]
  ));
}