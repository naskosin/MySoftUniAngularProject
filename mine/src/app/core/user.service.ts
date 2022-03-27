import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface CreateDto{
  username?: string
  email:string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

currentUser!: IUser;
get isLogged(){return !!this.currentUser}
  

constructor(private http: HttpClient) { }

logOut(): void{

}

login(userData: {email: string, password: string}): Observable<IUser>{
  return this.http.post<IUser>('http://localhost:3030/users/login', userData).pipe(tap(user=>this.currentUser=user))
}
  register( userData: { username: string, email: string, password: string}): Observable<IUser>{
    return this.http.post<IUser>('http://localhost:3030/users/register', userData)
  }
}
