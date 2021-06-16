import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  settings = {
    hideSubHeader: true,
    noDataMessage: 'Não há nenhum dado para exibir',
    actions: {
      position: "right",
      columnTitle: "Editar",
      add: false,
      edit: true,
      delete: false
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      nome: {
        title: 'Nome',
        type: 'string',
      },
      sobrenome: {
        title: 'Sobrenome',
        type: 'string',
      },
      cpf: {
        title: 'CPF',
        type: 'string',
      },
      carteiraTrabalho: {
        title: 'Cart. Trabalho',
        type: 'string',
      },
      dataNascimento: {
        title: 'Data Nascimento',
        type: 'number',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
  }

}
