import { createSelector } from 'reselect';
import fp from 'lodash/fp';

import { AppState } from '../../store';
import { isNotEmpty } from '../../utils/helpers';

const errorsStateSelector = (state: AppState): AppState['errors'] => state.errors;

export const errorMessageSelector = createSelector(
  errorsStateSelector,
  fp.propOr('', 'message'),
);

export const hasErrorSelector = createSelector(errorsStateSelector, isNotEmpty);
