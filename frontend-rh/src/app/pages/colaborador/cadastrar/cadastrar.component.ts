import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionariosService } from '../../shared/services/funcionarios/funcionarios.service';

@Component({
  selector: 'ngx-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  formControl = new FormControl(new Date());
  ngModelDate = new Date();

  constructor(
    private funcionarioService: FuncionariosService,
    private route: Router
  ) { }

  funcionarioForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    nome: new FormControl(null, [Validators.required]),
    cpf: new FormControl(null, [Validators.required]),
    senha: new FormControl(null, [Validators.required]),
    telefone: new FormControl(null, [Validators.required]),
    sabado: new FormControl(null),
    inicioExpedienteSabado: new FormControl(null),
    finalExpedienteSabado: new FormControl(null),
    nascimento: new FormControl(null, [Validators.required]),
    sobrenome: new FormControl(null, [Validators.required]),
    dependentes: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    cartTrabalho: new FormControl(null, [Validators.required]),
    domingo: new FormControl(null),
    inicioExpedienteDomingo: new FormControl(null),
    finalExpedienteDomingo: new FormControl(null),
    idCargo: new FormControl(null, [Validators.required]),
    cidade: new FormControl(null, [Validators.required]),
    cep: new FormControl(null, [Validators.required]),
    numero: new FormControl(null, [Validators.required]),
    idSetor: new FormControl(null, [Validators.required]),
    bairro: new FormControl(null, [Validators.required]),
    logradouro: new FormControl(null, [Validators.required])
  });

  ngOnInit(): void {
  }

  addFuncionario() {
    let funcionario = this.funcionarioForm.value;
    console.log(funcionario);
    this.funcionarioService.saveFuncionario(funcionario);
    this.route.navigate(['pages/homedashboard']);
  }

}
