import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ErrorMessage from '../components/organisms/ErrorMessage';
import LoadingIndicator from '../components/organisms/LoadingIndicator';
import useFetchCountry from '../hooks/use-fetch-country';

interface ViewCountryPageParams {
  code: string;
}

interface CountrySummary {
  label: string;
  value: React.ReactNode;
}

const ViewCountry: React.FC = () => {
  const { code } = useParams<ViewCountryPageParams>();
  const { data, loading, error } = useFetchCountry(code);
  const ready = !loading && !error && data;

  const summary: CountrySummary[] = [
    { label: 'Capital City', value: data?.capital },
    { label: 'Population', value: data?.population },
    {
      label: 'Languages',
      value: data?.languages?.map(({ iso639_1, name, nativeName }) => (
        <div key={iso639_1}>
          {name} (<em>{nativeName}</em>)
        </div>
      ))
    },
    {
      label: 'Currencies',
      value: data?.currencies?.map(({ code, name }) => <div key={code}>{name}</div>)
    }
  ];

  return (
    <div>
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-lg leading-6 font-medium text-gray-700">
          {loading || !data ? <div>Loading...</div> : data.name}
        </h1>
        <Link
          to="/"
          className="rounded px-4 py-2 text-sm font-medium transition-colors appearance-none focus:outline-none focus:ring-blue-200 focus:ring-2 bg-white border shadow-sm border-gray-300 text-gray-700 hover:bg-gray-50 focus:bg-gray-50"
        >
          Return to list
        </Link>
      </div>
      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error.message || error.name} />}
      {ready && (
        <dl>
          {summary.map(({ label, value }, index) => (
            <div
              key={index}
              className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 ${index % 2 ? 'bg-gray-100' : 'bg-white'}`}
            >
              <dt className="text-sm font-medium text-gray-500 leading-6">{label}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 leading-6">{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
};

export default ViewCountry;
