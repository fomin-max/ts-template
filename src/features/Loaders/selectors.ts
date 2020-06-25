import _ from 'lodash';

import { Loader } from './enums';

import { AppState } from '../../store';

export const isLoadingSelector = (loader: Loader) => (state: AppState) =>
  _.get(state, ['loaders', loader], false);
