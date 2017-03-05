import rawData from '../data/bevolkerungsstruktur';
import {extractDataHelper} from './helpers';

// http://daten.frankfurt.de/dataset/bevoelkerung

export const foreigners = () => {
  return extractDataHelper(
    rawData,
    "Bevölkerungsstruktur Ausländerinnen und Ausländer in %  2012",
    'Percentage of foreigners'
  );
}

export const averageAge = () => {
  return extractDataHelper(
    rawData,
    "Bevölkerungsstruktur Durchschnittsalter  2012",
    'Average age'
  );
}

export const women = () => {
  return extractDataHelper(
    rawData,
    "Bevölkerungsstruktur Frauen in %  2012",
    'Percentage of women'
  );
}

export const nationalitiesCount = () => {
  return extractDataHelper(
    rawData,
    "Bevölkerungsstruktur Zahl der Staatsangehörigkeiten  2012",
    'Amount of different nationalities'
  );
}
