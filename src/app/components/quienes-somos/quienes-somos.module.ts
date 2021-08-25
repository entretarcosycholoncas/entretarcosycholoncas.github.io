import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosComponent } from './quienes-somos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: QuienesSomosComponent }
]

@NgModule({
  declarations: [
    QuienesSomosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class QuienesSomosModule { }
