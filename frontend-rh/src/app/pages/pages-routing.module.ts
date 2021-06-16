import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ColaboradorComponent } from './shared/component/colaborador/colaborador/colaborador.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: 'colaborador',
      loadChildren: () => import('./colaborador/colaborador.module')
        .then(m => m.ColaboradorModule),
    },
    {
      path: 'homedashboard',
      loadChildren: () => import('./homedashboard/homedashboard.module')
        .then(m => m.HomedashboardModule),
    },
    {
      path: 'minhaconta',
      loadChildren: () => import('./minhaconta/minhaconta.module')
        .then(m => m.MinhacontaModule),
    },
    {
      path: 'pontos',
      loadChildren: () => import('./pontos/pontos.module')
        .then(m => m.PontosModule),
    },
    {
      path: 'colaboradorList',
      component: ColaboradorComponent},
    {
      path: '',
      redirectTo: 'homedashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
