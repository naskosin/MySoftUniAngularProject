import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap} from 'rxjs/operators'

import { IUser } from '../core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user! : IUser;

  

  constructor(private http: HttpClient) {

   }
   login(email: string, password: string) {
     return this.http.post<IUser>("https://server2nasko.herokuapp.com/users/login", {email, password}).pipe(
       tap((userData: IUser)=>this.user=userData)
     )
   }
}
