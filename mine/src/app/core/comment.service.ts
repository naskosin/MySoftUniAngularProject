import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComment():Observable<IComment[]>{
    return this.http.get<IComment[]>('http://localhost:3030/data/comments')
  }
  createComment(userData: {comment: string,  email:string, themeId:string}, options:{headers: HttpHeaders}) : Observable<IComment>{
 
    return this.http.post<IComment>('http://localhost:3030/data/comments', userData, options)
  }
}