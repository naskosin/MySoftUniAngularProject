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
  fishes: IFish[]
  id: string;
  constructor(private userService: UserService, private route: Router, private galleryServ : GalleryService,){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      this.id = route.paramMap.get('fishid')
      console.log(this.id)
      this.galleryServ.getAllCatches$().subscribe(data=>{this.fishes=data})
      this.galleryServ.getCatchOne(this.id).subscribe(dat=>{this.fish=dat});
      console.log(this.fish)
      if(this.userService.currentUser._id===this.fish?._ownerId){
        
        return true;}
     
        return this.route.createUrlTree(['/gallery'])
    
      
  }
  
}
