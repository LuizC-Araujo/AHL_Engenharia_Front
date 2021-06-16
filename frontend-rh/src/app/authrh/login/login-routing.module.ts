import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogarComponent } from './logar/logar.component';

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      {
        path: 'logar',
        component: LogarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
