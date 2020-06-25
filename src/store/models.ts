import { loaders } from '../features/Loaders/model';
import { errors } from '../features/Errors/model';
import { profile } from '../features/Profile/model';
import { application } from '../features/Application/model';

export interface RootModel {
  loaders: typeof loaders,
  errors: typeof errors,
  profile: typeof profile,
  application: typeof application,
}

export const models: RootModel = {
  loaders,
  errors,
  profile,
  application,
};
