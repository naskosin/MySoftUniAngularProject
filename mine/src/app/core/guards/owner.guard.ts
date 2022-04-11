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
  ownerId!: string;
 isTrue: boolean;
  id: string;
  constructor(private userService: UserService, private route: Router, private galleryServ : GalleryService,){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
     
      this.id = this.userService.currentUser._id;
      console.log(this.id);
      const fishId = route.paramMap.get('fishid');
      console.log(fishId);
    this.galleryServ.getCatchOne(fishId).subscribe(data=>{
  
     this.ownerId=data._ownerId; 
     
 });
     
  console.log(this.ownerId);

 console.log(this.isTrue);
  if(this.id==this.ownerId){
        
    return true;} ;
    
     
        
    return this.route.createUrlTree(['/gallery'])
      
  }
 
}
