import { Router } from '@angular/router';
import { AppConstants } from './../../../../app-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/login.model';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  logar(loginForm) {
    return this.http.post(AppConstants.baseLogin, JSON.stringify(loginForm)).subscribe(data => {

      /**Retorno HTTP */
      var token = (JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1])

      localStorage.setItem("token", token)

      this.router.navigate(['pages'])
    },
    error => {
      alert("Acesso negado!")
    }
    )
  }
}
