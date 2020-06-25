import { LoadersState } from './types';
import { Loader } from './enums';

export const loaders = {
  state: {} as LoadersState,
  reducers: {
    show: (state: LoadersState, loader: Loader) => ({
      ...state,
      [loader]: true,
    }),
    hide: (state: LoadersState, loader: Loader) => ({
      ...state,
      [loader]: false,
    }),
  },
};
