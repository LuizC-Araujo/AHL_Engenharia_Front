import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../pages/shared/services/login/login.service';

@Component({
  selector: 'ngx-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.scss']
})
export class LogarComponent implements OnInit {

  formControl = new FormControl(new Date());
  ngModelDate = new Date();

  constructor(
    private loginService: LoginService,
    private route: Router,
    private http: HttpClient
  ) { }

  loginForm = new FormGroup({
    cpf: new FormControl(null, [Validators.required]),
    senha: new FormControl(null, [Validators.required])
  });

  ngOnInit(): void {
  }


  public logar() {
    let dados = this.loginForm.value;
    this.loginService.logar(dados);
    /*this.route.navigate(['pages']);*/
  }

}
