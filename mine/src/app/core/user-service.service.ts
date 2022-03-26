import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  register( userData: {username: string, email: string, password: string}): Observable<IUser>{
    return this.http.post<IUser>('http://localhost:3030/users/register', userData)
  }
}
