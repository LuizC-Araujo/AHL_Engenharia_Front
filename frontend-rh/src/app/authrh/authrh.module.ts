import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthrhRoutingModule } from './authrh-routing.module';
import { AuthrhComponent } from './authrh.component';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';


@NgModule({
  declarations: [AuthrhComponent],
  imports: [
    CommonModule,
    AuthrhRoutingModule,
    NbMenuModule,
    ThemeModule,
  ]
})
export class AuthrhModule { }
