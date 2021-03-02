import { useFetch } from 'use-http';
import config from '../config';
import { Country } from '../interfaces/country';

const useFetchCountryList = () => useFetch<Country[]>(`${config.apiBaseUrl}/all`, []);

export default useFetchCountryList;
