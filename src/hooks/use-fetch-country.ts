import { useFetch } from 'use-http';
import config from '../config';
import { Country } from '../interfaces/country';

const useFetchCountry = (code: string) => useFetch<Country>(`${config.apiBaseUrl}/alpha/${code}`, [code]);

export default useFetchCountry;
