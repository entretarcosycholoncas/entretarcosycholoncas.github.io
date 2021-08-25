import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactanosComponent } from './contactanos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContactanosComponent }
]

@NgModule({
  declarations: [
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactanasModule { }
