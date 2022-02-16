import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router: any;

  constructor() { }

  

  login({ name, password}:any): Observable<any> {
    if (name == 'admin' && password == '123'){
      return of({});
    }
    return throwError(new Error('Invalid login'))
  }
}
