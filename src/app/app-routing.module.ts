import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('@components/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('@components/productos/productos.module')
      .then(m => m.ProductosModule)
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('@components/quienes-somos/quienes-somos.module')
      .then(m => m.QuienesSomosModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('@components/contactanos/contactanos.module')
      .then(m => m.ContactanasModule)
  },
  {
    path: 'politicas-privacidad',
    loadChildren: () => import('@components/politicas-privacidad/politicas-privacidad.module')
      .then(m => m.PoliticasPrivacidadModule)
  },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
