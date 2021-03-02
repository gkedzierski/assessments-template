import React, { useMemo, useState } from 'react';
import config from '../../config';
import { Country } from '../../interfaces/country';
import { CountrySortField } from '../../types/country-sort-field';
import { SortDirection } from '../../types/sort-direction';
import SortButton from '../atoms/SortButton';
import CountriesTableRow from '../molecules/CountriesTableRow';

interface CountriesTableProps {
  countries: Country[];
}

interface CountriesTableColumn {
  field: CountrySortField;
  label: string;
}

const sortFunc = (sortBy: CountrySortField) => (a: Country, b: Country) => {
  // Check if sorting is done by numeric field
  if (sortBy !== 'population') {
    return a[sortBy].localeCompare(b[sortBy], config.locale);
  }

  return a[sortBy] - b[sortBy];
};

const columns: CountriesTableColumn[] = [
  { field: 'name', label: 'Name' },
  { field: 'population', label: 'Population' },
  { field: 'capital', label: 'Capital City' }
];

const CountriesTable: React.FC<CountriesTableProps> = ({ countries }) => {
  const [sortBy, setSortBy] = useState<CountrySortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const toggleSort = (field: CountrySortField) => () => {
    const newSortDirection = sortBy === field && sortDirection === 'asc' ? 'desc' : 'asc';

    if (sortBy !== field) {
      setSortBy(field);
    }
    setSortDirection(newSortDirection);
  };

  const sortedCountries = useMemo(() => {
    const sorted = countries.sort(sortFunc(sortBy));

    if (sortDirection === 'desc') {
      sorted.reverse();
    }

    return sorted;
  }, [countries, sortBy, sortDirection]);

  return (
    <table className="w-full table-fixed">
      <thead>
        <tr>
          {columns.map(({ field, label }) => (
            <th key={field} className="px-4 pt-2 pb-3 text-left border-b border-gray-200 bg-gray-100 sticky top-0">
              <SortButton onClick={toggleSort(field)} field={field} sortBy={sortBy} sortDirection={sortDirection}>
                {label}
              </SortButton>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedCountries.length > 0 ? (
          sortedCountries.map(country => <CountriesTableRow key={country.alpha2Code} country={country} />)
        ) : (
          <tr>
            <td colSpan={3} className="py-16 px-4 font-medium text-center text-gray-500">
              No results match your filter criteria
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CountriesTable;
