import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IFish} from './interfaces';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { 
   
    }
    getAllCatches$(): Observable<IFish[]>{
      return this.http.get<IFish[]>('http://localhost:3030/data/fishes')

  }
    getCatchOne(id:string): Observable<IFish>{
      return this.http.get<IFish>(`http://localhost:3030/data/fishes/${id}`)
    }
}
