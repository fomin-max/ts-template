import { AppState } from '../../store';

export const applicationStateSelector = (state: AppState): AppState['application'] => state.application;
