import React from 'react';
import { CountrySortField } from '../../types/country-sort-field';
import { SortDirection } from '../../types/sort-direction';
import ChevronUp from './ChevronUp';

interface SortButtonProps {
  field: CountrySortField;
  sortBy: CountrySortField;
  sortDirection: SortDirection;
  onClick: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({ field, sortBy, sortDirection, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center text-gray-500 text-xs font-semibold tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-blue-200 transition hover:text-gray-700"
    >
      {children}

      {field === sortBy && (
        <ChevronUp
          className={`ml-1 w-auto h-4 text-gray-400 transition-all transform ${sortDirection === 'desc' &&
            'rotate-180'}`}
        />
      )}
    </button>
  );
};

export default SortButton;
