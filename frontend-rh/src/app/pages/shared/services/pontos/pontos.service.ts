import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pontos } from '../../models/pontos.model';

@Injectable({
  providedIn: 'root'
})
export class PontosService {

  constructor(private http: HttpClient) { }

  savePontos(pontos: Pontos) {

  }

  editFuncionario(pontos: Pontos) {
    
  }

  deleteFuncionario(pontos: Pontos) {
    
  }

  getFuncionarios() {
    
  }

}
