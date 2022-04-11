import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { IFish } from '../interfaces';
import { GalleryService } from '../gallery.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
  fish!: IFish;
 
  id: string;
  constructor(private userService: UserService, private route: Router, private galleryServ : GalleryService,){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
     
      console.log(this.userService.currentUser._id);
      const fishId = route.paramMap.get('fishid');
      console.log(fishId);
    this.galleryServ.getCatchOne(fishId ).subscribe(data=>{
     console.log(data);
         this.fish=data;
      });
   console.log(this.fish._ownerId);
      if(this.userService.currentUser._id==this.fish._ownerId){
        
        return true;}
     
        return this.route.createUrlTree(['/gallery'])
    
      
  }
  
}
