import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticasPrivacidadComponent } from './politicas-privacidad.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PoliticasPrivacidadComponent }
]

@NgModule({
  declarations: [
    PoliticasPrivacidadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PoliticasPrivacidadModule { }
