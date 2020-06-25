import { AppState } from '../../store';

export const profileStateSelector = (state: AppState): AppState['profile'] =>
  state.profile;
