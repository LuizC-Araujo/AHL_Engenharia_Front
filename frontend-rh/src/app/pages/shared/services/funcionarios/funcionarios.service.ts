import { AppConstants } from './../../../../app-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../../models/funcionario.model';


@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { }

  consultarFuncionarios(nome:String): Observable<any>{
    return this.http.get(AppConstants.baseUrl + "/buscarPorNome/" + nome);
  }

  saveFuncionario(Funcionario) : Observable<any>{
    return this.http.post<any>(AppConstants.baseUrl + "/salvar", Funcionario);
  }
  editFuncionario(Funcionario) {

  }

  deleteFuncionario(funcionario: Funcionario) {

  }

  getFuncionarios(): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + "/listartodos");
  }

}
