import { FormsModule } from '@angular/forms';
import { FuncionariosService } from './../../shared/services/funcionarios/funcionarios.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../shared/models/funcionario.model';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  nome: String;
  colaboradores: Observable<Funcionario[]>;

  constructor(private funcionarioService: FuncionariosService){

  }

  ngOnInit() {
    this.funcionarioService.getFuncionarios().subscribe(data => {
      this.colaboradores = data;
    });
  }

  buscarColaboradorNome() {
    this.funcionarioService.consultarFuncionarios(this.nome).subscribe(data => {
      this.colaboradores = data;
    });
  }
}
