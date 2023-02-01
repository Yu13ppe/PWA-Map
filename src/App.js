import React from 'react';
import { NavBar } from './Components/NavBar';
import {MapView} from './Components/Map';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <MapView />
    </React.Fragment>
  );
}

export default App;