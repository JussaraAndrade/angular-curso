import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contato } from './contatos.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContatosService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}
  //Endpoints
  getContatos() {
    return this.http.get<Contato[]>(this.API_URL + '/contatos');
  }

  getContato(id: any) {
    return this.http.get<Contato>(this.API_URL + '/contatos/' + id);
  }
}
