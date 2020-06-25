import { Profile, ProfileState } from './types';
import { Dispatch } from '../../store';

export const profile = {
  state: {} as Partial<ProfileState>,
  reducers: {
    setUser: (state: ProfileState, profileState: Profile) => ({
      ...state,
      ...profileState,
    }),
  },
  effects: (dispatch: Dispatch) => ({
    getUser: async () => {
      // const { data } = await axios.get<Profile>(API_URLS.PROFILE);
      const data = {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        middleName: 'middleName',
      };

      dispatch.profile.setUser(data);
    },
  }),
};
