import {MapView} from '../Pages/Map';
import {Stops} from '../Pages/Stops';
import { Lines } from '../Pages/Lines';


const routes = [
    {
      title: 'Stops',
      path: '/stops',
      component: Stops,
    },
    {
      title: 'Lines',
      path: '/Lines',
      component: Lines,
    },
    {
      title: 'Map',
      path: '/',
      component: MapView,
    },
  ];
  
  export default routes;