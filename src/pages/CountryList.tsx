import React, { useMemo, useState } from 'react';
import CountriesTable from '../components/organisms/CountriesTable';
import CountryListFilters from '../components/organisms/CountryListFilters';
import ErrorMessage from '../components/organisms/ErrorMessage';
import LoadingIndicator from '../components/organisms/LoadingIndicator';
import config from '../config';
import useFetchCountryList from '../hooks/use-fetch-country-list';

const CountryList: React.FC = () => {
  const { data, error, loading } = useFetchCountryList();
  const [filterQuery, setFilterQuery] = useState('');
  const filteredCountries = useMemo(() => {
    if (!data) {
      return [];
    }

    const normalizedQuery = filterQuery.toLocaleLowerCase(config.locale);

    return data.filter(
      country =>
        country.alpha2Code.toLowerCase() === filterQuery ||
        country.alpha3Code.toLowerCase() === filterQuery ||
        country.name.toLocaleLowerCase(config.locale).indexOf(normalizedQuery) !== -1
    );
  }, [data, filterQuery]);

  return (
    <div>
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorMessage message={error.message || error.name} />
      ) : data ? (
        <>
          <CountryListFilters query={filterQuery} onChange={setFilterQuery} />
          <CountriesTable countries={filteredCountries} />
        </>
      ) : (
        <ErrorMessage message="No data available" />
      )}
    </div>
  );
};

export default CountryList;
