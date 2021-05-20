import React, { FC } from 'react'

import { StoreProvider, store } from './features/$Store'
import { AppRouter } from './components/AppRouter/AppRouter'
import { ErrorBoundary } from './components/ErrorBoundry/ErrorBoundry'

export const App: FC = () => (
  <ErrorBoundary>
    <StoreProvider value={store}>
      <AppRouter />
    </StoreProvider>
  </ErrorBoundary>
)
