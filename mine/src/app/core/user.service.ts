import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
get isLogged(): boolean{
  if(!!this.currentUser){
  return true;}
return false;
}
  

constructor(private http: HttpClient) { }



login(userData: {email: string, password: string}): Observable<IUser>{
  return this.http.post<IUser>('http://localhost:3030/users/login', userData).pipe(tap(user=>this.currentUser=user))
}
  register( userData: {  email: string, password: string}): Observable<IUser>{
    return this.http.post<IUser>('http://localhost:3030/users/register', userData)
  }
  singleUser(options:{headers:HttpHeaders}): Observable<IUser>{
    return this.http.get<IUser>('http://localhost:3030/users/me',options)
  }
  logOut(options:{headers:HttpHeaders}): Observable<IUser>{
    return this.http.get<IUser>('http://localhost:3030/users/logout', options)
  }

  
}
