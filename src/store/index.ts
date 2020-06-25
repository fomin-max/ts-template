import { connectRouter, routerMiddleware } from 'connected-react-router';
import { init, RematchDispatch, RematchRootState } from '@rematch/core';

import { history } from './history';
import { models } from './models';

const router = connectRouter(history);

export const store = init({
  models,
  redux: {
    reducers: {
      router,
    },
    middlewares: [routerMiddleware(history)],
    devtoolOptions: {},
  },
});

export const { dispatch, getState } = store;

export type AppState = RematchRootState<typeof models>;
export type Dispatch = RematchDispatch<typeof models>;
