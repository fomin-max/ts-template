import React, { FC, Suspense } from 'react'
import { Router, Switch } from 'react-router-dom'
import { Route, RouteProps } from 'react-router'
import { observer } from 'mobx-react-lite'
import { createBrowserHistory } from 'history'

import { NotFound } from '../../pages/NotFound/NotFound'
import { Home } from '../../pages/Home/Home'
import { IProtectedRoute, ProtectedRoute } from './ProtectedRoute'
import { URLS } from '../../utils'

export const history = createBrowserHistory()

const protectedRoutes: IProtectedRoute[] = []

const publicRoutes: RouteProps[] = [
  {
    path: URLS.NOT_FOUND,
    component: NotFound,
    exact: true,
  },
  {
    path: URLS.HOME,
    component: Home,
    exact: true,
  },
]

export const AppRouter: FC = observer(() => (
  <Router history={history}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {publicRoutes.map((publicRoute) => (
          <Route key={publicRoute.path?.toString()} {...publicRoute} />
        ))}

        {protectedRoutes.map((protectedRoute) => (
          <ProtectedRoute
            key={protectedRoute.path?.toString()}
            {...protectedRoute}
          />
        ))}

        <Route key={URLS.NOT_FOUND} component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
))
