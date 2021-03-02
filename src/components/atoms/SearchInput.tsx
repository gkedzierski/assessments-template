import React from 'react';

interface SearchInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const SearchInput: React.FC<SearchInputProps> = props => (
  <input
    type="text"
    className="border border-gray-200 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 transition appearance-none"
    placeholder="Search..."
    {...props}
  />
);
export default SearchInput;
