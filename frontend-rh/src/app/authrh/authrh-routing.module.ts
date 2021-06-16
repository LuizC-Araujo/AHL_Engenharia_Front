import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthrhComponent } from './authrh.component';

const routes: Routes = [{ 
  path: '', 
  component: AuthrhComponent,
  children: [
    {
      path: 'login',
      loadChildren: () => import('./login/login.module')
        .then(m => m.LoginModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthrhRoutingModule { }
