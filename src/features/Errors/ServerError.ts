import { AxiosError } from 'axios';

import { BackendError } from './types';

export class ServerError {
  message: string;

  error: AxiosError<BackendError>;

  constructor(error: AxiosError<BackendError>) {
    this.message = 'Server connection error';
    this.error = error;
  }
}
