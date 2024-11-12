import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';
import { homeGuard } from './guards/home.guard';
import { IngresoPage } from './pages/ingreso/ingreso.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full',
  },
  {
    path: 'map',
    loadComponent: () => import('./pages/map/map.page').then( m => m.MapPage),
  },
  {
    path: 'theme',
    loadComponent: () => import('./pages/theme/theme.page').then( m => m.ThemePage)
  },
  {
    path: 'ingreso',
    loadComponent: () => import('./pages/ingreso/ingreso.page').then( m => m.IngresoPage),
    
  },
  {
    path: 'pregunta',
    loadComponent: () => import('./pages/pregunta/pregunta.page').then( m => m.PreguntaPage)
  },
  {
    path: 'correcto',
    loadComponent: () => import('./pages/correcto/correcto.page').then( m => m.CorrectoPage)
  },
  {
    path: 'incorrecto',
    loadComponent: () => import('./pages/incorrecto/incorrecto.page').then( m => m.IncorrectoPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
];
