import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { URLS } from './constants';
import { Main, NotFound, Profile } from './pages';
import { Header } from './features/Header';
import { Loader } from './features/Loaders/enums';
import { isLoadingSelector } from './features/Loaders/selectors';
import { ErrorBoundary } from './features/Errors';

export const App = (): React.ReactElement => {
  const isApplicationInitializing = useSelector(
    isLoadingSelector(Loader.InitializeApplication),
  );

  if (isApplicationInitializing) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <ErrorBoundary>
        <div>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path={URLS.PROFILE} component={Profile} />
              <Route exact path={URLS.MAIN} component={Main} />
              <Route exact path={URLS.NOT_FOUND} component={NotFound} />
              <Route>
                <Redirect to={URLS.NOT_FOUND} />
              </Route>
            </Switch>
          </React.Suspense>
        </div>
      </ErrorBoundary>
    </>
  );
};
