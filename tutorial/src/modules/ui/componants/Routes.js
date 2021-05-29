import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homelayout from 'modules/home/componants/Routes'
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homelayout></Homelayout>
      </Route>
      <Route>
        <div>page not found</div>
      </Route>
    </Switch>
  )
}
