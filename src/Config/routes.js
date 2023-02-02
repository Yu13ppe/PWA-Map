import {MapView} from '../Pages/Map';
import {Stops} from '../Pages/Stops';

const routes = [
    {
      title: 'Stops',
      path: '/stops',
      component: Stops,
    },
    {
      title: 'Map',
      path: '/',
      component: MapView,
    },
  ];
  
  export default routes;