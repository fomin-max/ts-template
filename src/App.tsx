import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { URLS } from './utils/constants'
import { NotFound } from './pages/NotFound/NotFound'
import { ErrorBoundary } from './components/ErrorBoundry/ErrorBoundry'

export const App: FC = () => (
  <ErrorBoundary>
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={URLS.NOT_FOUND} component={NotFound} />

          <Route>
            <Redirect to={URLS.NOT_FOUND} />
          </Route>
        </Switch>
      </React.Suspense>
    </div>
  </ErrorBoundary>
)
