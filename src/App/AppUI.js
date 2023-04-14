import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { NavBar } from '../Components/NavBar';
import routes from '../Config/routes';
// import navRoutes from '../Config/Routes-Nav';

function AppUI() {
  return (
    <React.Fragment>
      <Router>
          <NavBar />
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} component={route.component} />
            ))}
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export { AppUI }