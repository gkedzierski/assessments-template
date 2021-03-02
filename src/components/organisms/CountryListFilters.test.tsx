import { mount } from 'enzyme';
import React from 'react';
import CountryListFilters from './CountryListFilters';

describe('CountryListFilters', () => {
  describe('when user types into a text field', () => {
    test('triggers onChange event', () => {
      const changeFn = jest.fn();
      const root = mount(<CountryListFilters query="" onChange={changeFn} />);
      const input = root.find('input');

      input.simulate('change', { target: { value: 'something' } });

      expect(changeFn).toHaveBeenCalledWith('something');
    });
  });
});
