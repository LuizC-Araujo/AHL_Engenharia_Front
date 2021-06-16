import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PontosService } from '../../shared/services/pontos/pontos.service';

@Component({
  selector: 'ngx-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  formControl = new FormControl(new Date());
  ngModelDate = new Date();

  constructor(
    private pontosService: PontosService,
    private route: Router
  ) { }

  pontosForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    colaboradorID: new FormControl(null, [Validators.required]),
    dataTrabalho: new FormControl(null, [Validators.required]),
    inicioExpediente: new FormControl(null, [Validators.required]),
    inicioIntervalo: new FormControl(null, [Validators.required]),
    fimExpediente: new FormControl(null, [Validators.required]),
    fimIntervalo: new FormControl(null, [Validators.required]),
    bancoDia: new FormControl(null, [Validators.required]),
    extraHora: new FormControl(null, [Validators.required]),
    falta: new FormControl(null),
    observacao: new FormControl(null)
    // o que é 'id' e o que é 'extraHora'????
  });

  ngOnInit(): void {
  }

  addPontos() {
    let pontos = this.pontosForm.value;
    console.log(pontos);
    this.pontosService.savePontos(pontos);
    this.route.navigate(['pages/homedashboard']);
  }

}
