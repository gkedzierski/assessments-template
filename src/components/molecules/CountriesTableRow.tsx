import React from 'react';
import { Link } from 'react-router-dom';
import useNumberFormat from '../../hooks/use-number-format';
import { Country } from '../../interfaces/country';

interface CountriesTableRowProps {
  country: Country;
}

const CountriesTableRow: React.FC<CountriesTableRowProps> = ({ country }) => {
  const population = useNumberFormat(country.population);

  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">
        <Link
          to={`/${country.alpha2Code}`}
          className="font-medium transition hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
        >
          {country.name}
        </Link>
      </td>
      <td className="px-4 py-2">{population}</td>
      <td className="px-4 py-2">{country.capital}</td>
    </tr>
  );
};

export default CountriesTableRow;
