import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) 
  },
  { 
    path: 'services', 
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) 
  },
  { 
    path: 'portfolio', 
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent) 
  },
  { path: '**', redirectTo: '' }
];
