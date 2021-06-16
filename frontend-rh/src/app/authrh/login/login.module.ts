import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LogarComponent } from './logar/logar.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, LogarComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }
