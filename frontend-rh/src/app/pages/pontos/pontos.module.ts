import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PontosRoutingModule } from './pontos-routing.module';
import { PontosComponent } from './pontos.component';
import { RegistrarComponent } from './registrar/registrar.component';

import { ThemeModule } from '../../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscarComponent } from './buscar/buscar.component';


@NgModule({
  declarations: [PontosComponent, RegistrarComponent, BuscarComponent],
  imports: [
    CommonModule,
    PontosRoutingModule,

    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbSpinnerModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbActionsModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbCheckboxModule
  ]
})
export class PontosModule { }
