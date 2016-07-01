import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';


const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    terminal: true
  },{
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'heroes',
    component: HeroesComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];