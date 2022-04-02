import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { IFish } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
   fish!: IFish
  constructor(private userService: UserService, private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.currentUser._id===this.fish._ownerId){
        
        return true;}
     
        return this.route.createUrlTree(['/gallery'])
    
      
  }
  
}
