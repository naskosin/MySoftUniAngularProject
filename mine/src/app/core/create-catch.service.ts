import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IFish } from './interfaces';
import { Observable } from 'rxjs';

  

@Injectable({
  providedIn: 'root'
})


export class CreateCatchService {
  
  accessToken: string = "";
  
  //headers.append("Authorization","Bearer " +t);

  constructor(private userService: UserService, private http:HttpClient) { 
    


}
createCatch(userData: {species: string, img: string, _id:string, weight: number}, options:{headers: HttpHeaders}) : Observable<IFish>{
 
  return this.http.post<IFish>('http://localhost:3030/data/fishes', userData, options)
}

  


}