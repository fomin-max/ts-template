import 'core-js'; // Provides polyfills necessary for a full ES2015+ environment
import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import './styles/index.scss';

import { App } from './App';
import { store } from './store';
import { history } from './store/history';
import { ErrorBoundary } from './features/Errors';

moment.locale('ru');

store.dispatch.application.initializeApplication();

window.addEventListener('load', () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app') || document.querySelectorAll('body')[0],
  );
});
