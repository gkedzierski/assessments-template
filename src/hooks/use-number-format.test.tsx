import { shallow } from 'enzyme';
import React from 'react';
import useNumberFormat from './use-number-format';

interface TestComponentProps {
  value: number;
}

const TestComponent: React.FC<TestComponentProps> = ({ value }) => {
  const formattedValue = useNumberFormat(value);

  return <>{formattedValue}</>;
};

describe('useNumberFormat', () => {
  test('formats a number', () => {
    const root = shallow(<TestComponent value={1000} />);

    expect(root.text()).toBe('1,000');
  });
});
