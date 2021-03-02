import { useMemo } from 'react';
import config from '../config';

const useNumberFormat = (value: number) => {
  const formattedValue = useMemo(() => Intl.NumberFormat(config.locale).format(value), [value]);

  return formattedValue;
};

export default useNumberFormat;
