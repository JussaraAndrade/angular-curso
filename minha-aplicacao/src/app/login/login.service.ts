import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) {}

  logar(email: string, senha: string) {
    //return this.http.post(this.API_URL + '/contatos', contato, this.httpOptions);
    if (email === 'teste@teste.com' && senha === '123') {
      return of({
        usuario: {
          nome: 'Teste',
          sobrenome: 'teste',
          email: 'teste@teste.com',
        },
        token: 'SD987GA97G9DF7G9D9AGD',
      }).pipe(
        delay(2000),
        tap(response =>{
          console.log(response.usuario);
          this.authService.setUsuario(response.usuario);
        })
      );
    }

    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos.'))
    );
  }
}
