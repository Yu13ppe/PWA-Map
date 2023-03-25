import { MapView } from '../Pages/Map';
import { Account } from '../Pages/Account';
import { Lines } from '../Pages/Lines';
import { Perfil } from '../Pages/Perfil';
import { Register } from '../Pages/Register';
import { Recover } from '../Pages/Recover';
import { HelpSection } from '../Pages/help';

const routes = [
  {
    title: 'HelpSection',
    path: '/HelpSection',
    component: HelpSection,
  },
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
    title: 'Register',
    path: '/Register',
    component: Register,
  },
  {
    title: 'Recover',
    path: '/Recover',
    component: Recover,
  },
  {
    title: 'Perfil',
    path: '/Perfil',
    component: Perfil,
  },
  {
    title: 'Map',
    path: '/',
    component: MapView,
  },
];

export default routes;