import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'authrh',
    loadChildren: () => import('./authrh/authrh.module')
      .then(m => m.AuthrhModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'authrh/login/logar', pathMatch: 'full' },
  { path: 'colaborador', loadChildren: () => import('./pages/colaborador/colaborador.module').then(m => m.ColaboradorModule) },
  { path: 'homedashboard', loadChildren: () => import('./pages/homedashboard/homedashboard.module').then(m => m.HomedashboardModule) },
  { path: 'minhaconta', loadChildren: () => import('./pages/minhaconta/minhaconta.module').then(m => m.MinhacontaModule) },
  { path: 'pontos', loadChildren: () => import('./pages/pontos/pontos.module').then(m => m.PontosModule) },
  { path: 'login', loadChildren: () => import('./authrh/login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: 'pages' }
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
