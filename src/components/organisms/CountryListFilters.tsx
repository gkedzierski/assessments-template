import React from 'react';
import SearchInput from '../atoms/SearchInput';

interface CountryListFiltersProps {
  query: string;
  onChange: (query: string) => void;
}

const CountryListFilters: React.FC<CountryListFiltersProps> = ({ query, onChange }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <SearchInput value={query} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

export default CountryListFilters;
