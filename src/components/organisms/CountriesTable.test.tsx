import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { Country } from '../../interfaces/country';
import CountriesTable from './CountriesTable';

const mockCountries: Country[] = [
  {
    name: 'Afghanistan',
    topLevelDomain: ['.af'],
    alpha2Code: 'AF',
    alpha3Code: 'AFG',
    callingCodes: ['93'],
    capital: 'Kabul',
    altSpellings: ['AF', 'Afġānistān'],
    region: 'Asia',
    subregion: 'Southern Asia',
    population: 27657145,
    latlng: [33.0, 65.0],
    demonym: 'Afghan',
    area: 652230.0,
    gini: 27.8,
    timezones: ['UTC+04:30'],
    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
    nativeName: 'افغانستان',
    numericCode: '004',
    currencies: [{ code: 'AFN', name: 'Afghan afghani', symbol: '؋' }],
    languages: [
      { iso639_1: 'ps', iso639_2: 'pus', name: 'Pashto', nativeName: 'پښتو' },
      { iso639_1: 'uz', iso639_2: 'uzb', name: 'Uzbek', nativeName: 'Oʻzbek' },
      { iso639_1: 'tk', iso639_2: 'tuk', name: 'Turkmen', nativeName: 'Türkmen' }
    ],
    translations: {
      de: 'Afghanistan',
      es: 'Afganistán',
      fr: 'Afghanistan',
      ja: 'アフガニスタン',
      it: 'Afghanistan',
      br: 'Afeganistão',
      pt: 'Afeganistão',
      nl: 'Afghanistan',
      hr: 'Afganistan',
      fa: 'افغانستان'
    },
    flag: 'https://restcountries.eu/data/afg.svg',
    regionalBlocs: [
      { acronym: 'SAARC', name: 'South Asian Association for Regional Cooperation', otherAcronyms: [], otherNames: [] }
    ],
    cioc: 'AFG'
  },
  {
    name: 'Åland Islands',
    topLevelDomain: ['.ax'],
    alpha2Code: 'AX',
    alpha3Code: 'ALA',
    callingCodes: ['358'],
    capital: 'Mariehamn',
    altSpellings: ['AX', 'Aaland', 'Aland', 'Ahvenanmaa'],
    region: 'Europe',
    subregion: 'Northern Europe',
    population: 28875,
    latlng: [60.116667, 19.9],
    demonym: 'Ålandish',
    area: 1580.0,
    gini: null,
    timezones: ['UTC+02:00'],
    borders: [],
    nativeName: 'Åland',
    numericCode: '248',
    currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
    languages: [{ iso639_1: 'sv', iso639_2: 'swe', name: 'Swedish', nativeName: 'svenska' }],
    translations: {
      de: 'Åland',
      es: 'Alandia',
      fr: 'Åland',
      ja: 'オーランド諸島',
      it: 'Isole Aland',
      br: 'Ilhas de Aland',
      pt: 'Ilhas de Aland',
      nl: 'Ålandeilanden',
      hr: 'Ålandski otoci',
      fa: 'جزایر الند'
    },
    flag: 'https://restcountries.eu/data/ala.svg',
    regionalBlocs: [{ acronym: 'EU', name: 'European Union', otherAcronyms: [], otherNames: [] }],
    cioc: ''
  }
];

describe('CountriesTable', () => {
  describe('when clicked on the population column header button', () => {
    test('sorts the results in ascending order by population', () => {
      const root = mount(
        <MemoryRouter>
          <CountriesTable countries={mockCountries} />
        </MemoryRouter>
      );

      const populationSortToggle = root
        .find('button')
        .findWhere(button => button.text().includes('Population'))
        .first();

      populationSortToggle.simulate('click');

      const names = root.find('CountriesTableRow').map(row =>
        row
          .find('td')
          .first()
          .text()
      );
      expect(names[0]).toBe('Åland Islands');
      expect(names[1]).toContain('Afghanistan');
    });
  });

  describe('when clicked on the name column header button when name was already selected', () => {
    test('sorts the results in desc order by name', () => {
      const root = mount(
        <MemoryRouter>
          <CountriesTable countries={mockCountries} />
        </MemoryRouter>
      );

      const nameSortToggle = root
        .find('button')
        .findWhere(button => button.text().includes('Name'))
        .first();

      nameSortToggle.simulate('click');

      const names = root.find('CountriesTableRow').map(row =>
        row
          .find('td')
          .first()
          .text()
      );
      expect(names[0]).toBe('Åland Islands');
      expect(names[1]).toContain('Afghanistan');
    });
  });
});
