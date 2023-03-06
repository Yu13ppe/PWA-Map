import { MapView } from '../Pages/Map';
import { Account } from '../Pages/Account';
import { Lines } from '../Pages/Lines';

const routes = [
    {
      title: 'Account',
      path: '/Account',
      component: Account,
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