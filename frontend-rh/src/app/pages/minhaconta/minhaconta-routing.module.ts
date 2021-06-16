import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhacontaComponent } from './minhaconta.component';

const routes: Routes = [{ path: '', component: MinhacontaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinhacontaRoutingModule { }
