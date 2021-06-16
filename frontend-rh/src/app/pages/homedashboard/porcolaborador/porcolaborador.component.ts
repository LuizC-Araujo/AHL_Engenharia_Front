import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-porcolaborador',
  templateUrl: './porcolaborador.component.html',
  styleUrls: ['./porcolaborador.component.scss']
})
export class PorcolaboradorComponent implements OnInit {

  colaboradoresAtivos = "ativos";
  colaboradoresInativos = "inativos";
  colaboradoresFaltas = "faltas";

  constructor() { }

  ngOnInit(): void {
  }

}
