import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';

import { PontosComponent } from './pontos.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  { 
    path: '', component: PontosComponent,
    children: [
      {
        path: 'registrar',
        component: RegistrarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PontosRoutingModule { }
