import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomedashboardRoutingModule } from './homedashboard-routing.module';
import { HomedashboardComponent } from './homedashboard.component';
import { PorcolaboradorComponent } from './porcolaborador/porcolaborador.component';
import { PorsetorComponent } from './porsetor/porsetor.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomedashboardComponent, PorcolaboradorComponent, PorsetorComponent],
  imports: [
    CommonModule,
    HomedashboardRoutingModule,

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
    NbLayoutModule
  ]
})
export class HomedashboardModule { }
