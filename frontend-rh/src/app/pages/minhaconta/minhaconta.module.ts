import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinhacontaRoutingModule } from './minhaconta-routing.module';
import { MinhacontaComponent } from './minhaconta.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MinhacontaComponent, AlterarComponent],
  imports: [
    CommonModule,
    MinhacontaRoutingModule,

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
    NbUserModule
  ]
})
export class MinhacontaModule { }
