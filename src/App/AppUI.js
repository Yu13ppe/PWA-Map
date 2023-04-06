import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { NavBar } from '../Components/NavBar';
import routes from '../Config/routes';
// import navRoutes from '../Config/Routes-Nav';
import { AppProvider } from '../Context/Context';

function AppUI() {
  return (
    <React.Fragment>
      <Router>
        <AppProvider>
          <NavBar />
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} component={route.component} />
            ))}
          </Switch>
        </AppProvider>
      </Router>
    </React.Fragment>
  );
}

export { AppUI }