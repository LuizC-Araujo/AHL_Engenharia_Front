import { Funcionario } from './../../../models/funcionario.model';
import { Observable } from 'rxjs';
import { FuncionariosService } from './../../../services/funcionarios/funcionarios.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.scss']
})
export class ColaboradorComponent implements OnInit {


  colaboradores: Observable<Funcionario[]>
  nome: String
  constructor(private funcionarioService: FuncionariosService) { }

  ngOnInit() {
    this.funcionarioService.getFuncionarios().subscribe(data => {
      this.colaboradores = data;
    });
  }

  consultarColaborador(){
      this.funcionarioService.consultarFuncionarios(this.nome).subscribe( data => {
        this.colaboradores = data;
      });
  }
}
