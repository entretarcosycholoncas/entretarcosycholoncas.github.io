import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: ':id', component: ProductoComponent }
]

@NgModule({
  declarations: [
    ProductosComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductosModule { }
