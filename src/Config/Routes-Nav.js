import { MapView } from '../Pages/Map';
import { Account } from '../Pages/Account';
import { Lines } from '../Pages/Lines';
import { HelpSection } from '../Pages/help';

const routes = [
    {
      title: 'Cuenta',
      path: '/Account',
      component: Account,
    },
    {
      title: 'Lineas',
      path: '/Lines',
      component: Lines,
    },
    {
      title: 'Ayuda',
      path: '/HelpSection',
      component: HelpSection,
    },
    {
      title: 'Mapa',
      path: '/',
      component: MapView,
    },
  ];
  
  export default routes;