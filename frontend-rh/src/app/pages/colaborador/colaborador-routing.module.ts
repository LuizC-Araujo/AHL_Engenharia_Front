import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { ColaboradorComponent } from './colaborador.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { 
    path: '', component: ColaboradorComponent,
    children: [
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'cadastrar',
        component: CadastrarComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
