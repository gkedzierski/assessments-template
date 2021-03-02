import { LatitudeLongitude } from '../types/latitude-longitude';
import { Currency } from './currency';
import { Language } from './language';
import { RegionalBlock } from './regional-block';
import { TranslationObject } from './translation-object';

export interface Country {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders: string[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  currencies: Currency[];
  demonym: string;
  flag: string;
  gini: number | null;
  languages: Language[];
  latlng: LatitudeLongitude;
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: RegionalBlock[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: TranslationObject;
}
