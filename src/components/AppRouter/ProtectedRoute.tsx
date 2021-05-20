import React, { FC } from 'react'
import { Redirect, Route, RouteProps, useRouteMatch } from 'react-router'
import concat from 'lodash/concat'

type conditionFunc = () => boolean
type redirectFunc = (params: any) => string

export interface IProtectedRoute extends RouteProps {
  condition: conditionFunc | conditionFunc[]
  redirectUrl: string | redirectFunc
}

export const ProtectedRoute: FC<IProtectedRoute> = ({
  path,
  exact,
  condition,
  redirectUrl,
  ...restRouteProps
}) => {
  const routeMatch = useRouteMatch({
    path,
    exact,
  })

  const isAllConditionsDone = concat(condition).every((validation) =>
    validation(),
  )

  if (isAllConditionsDone) {
    return <Route path={path} exact={exact} {...restRouteProps} />
  }

  const redirectTo =
    typeof redirectUrl === 'function'
      ? redirectUrl(routeMatch?.params || {})
      : redirectUrl

  return <Redirect to={redirectTo} />
}
