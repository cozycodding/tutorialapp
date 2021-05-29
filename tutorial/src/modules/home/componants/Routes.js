import React from 'react'
import Homelayout from './Homelayout'
import { Route, useRouteMatch } from 'react-router-dom'
export default function Routes() {
  const { path } = useRouteMatch()

  return (
    <Route path={path}>
      <Homelayout></Homelayout>
    </Route>
  )
}
