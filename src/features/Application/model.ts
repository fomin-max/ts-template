import { Dispatch } from '../../store';
import { Loader } from '../Loaders/enums';
import { ApplicationState } from './types';

export const application = {
  state: {} as Partial<ApplicationState>,
  reducers: {},
  effects: (dispatch: Dispatch) => ({
    initializeApplication: async () => {
      try {
        dispatch.loaders.show(Loader.InitializeApplication);

        await dispatch.profile.getUser();
      } catch (error) {
        dispatch.errors.throwError(error);
      } finally {
        dispatch.loaders.hide(Loader.InitializeApplication);
      }
    },
  }),
};
