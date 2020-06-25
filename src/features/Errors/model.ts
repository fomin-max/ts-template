import _ from 'lodash';

import { ServerError } from './ServerError';
import { Dispatch } from '../../store';
import { ErrorState } from './types';

const getDefaultServerError = ({ error, message }: ServerError): string =>
  [
    message,
    error.config.url,
    error.response?.status,
    error.response?.statusText,
  ].join(' ');

const getErrorMessage = <T>(error: T): string => {
  console.error(error);

  if (_.isString(error)) {
    return error;
  }

  if (error instanceof ServerError) {
    const defaultServerError = getDefaultServerError(error);

    return (
      error.error.response?.data.title ||
      error.error.response?.data.message ||
      defaultServerError
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Unknown error';
};

export const errors = {
  state: {} as ErrorState,
  reducers: {
    setError: (state: ErrorState, error: ErrorState) => ({
      ...state,
      ...error,
    }),
  },
  effects: (dispatch: Dispatch) => ({
    throwError: async (error: string | ServerError | Error) => {
      const errorMessage = getErrorMessage(error);

      if (error instanceof ServerError) {
        dispatch.errors.setError({
          message: errorMessage,
        });
      }
    },
  }),
};
