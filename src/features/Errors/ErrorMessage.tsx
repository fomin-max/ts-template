import React from 'react';
import { useSelector } from 'react-redux';

import { errorMessageSelector } from './selectors';

interface Props {
  [x: string]: unknown,
}

export const ErrorMessage = ({
  ...classNames
}: Props): React.ReactElement | null => {
  const errorMessage = useSelector(errorMessageSelector);

  if (!errorMessage) return null;

  return <div {...classNames}>{errorMessage}</div>;
};
